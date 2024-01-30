document.addEventListener('DOMContentLoaded', function () {
    const warData = [
        { id: 1, title: "The Hundred Years' War", type: "event", start: "1337-05-24", end: "1453-10-19", description: "(Lecture 2) The Hundred Years’ War was a 100+ year-long intermittent struggle between England and France in the 14th–15th century over a series of disputes, including the question of the legitimate succession to the French crown. By convention the war is said to have started with the confiscation of the English-held duchy of Guyenne by French King Philip VI. This confiscation, however, had been preceded by periodic fighting over the question of English fiefs in France going back to the 12th century. (Britannica)" },
        { id: 2, title: "Battle of Agincourt", type: "event", start: "1415-10-25", description: "(Lecture 2) The Battle of Agincourt was a decisive battle in the Hundred Years’ War that resulted in an English victory. The English army, led by King Henry V, famously achieved victory in spite of the numerical superiority of the French, in part from the use of the English longbow in large numbers. (Britannica)" },
        { id: 3, title: "Crimean War", type: "event", start: "1853-10-05", end: "1856-03-30", description: "The Crimean War was fought between the Russian Empire and an ultimately victorious alliance of the Ottoman Empire, France, the United Kingdom, and Sardinia-Piedmont." },
        { id: 4, title: "World War I", type: "event", start: "1914-07-28", end: "1918-11-11", description: "The First World War, also known as The Great War" },
        { id: 5, title: "Spanish Civil War", type: "event", start: "1936-07-17", end: "1939-04-01", description: "The bloodiest conflict western Europe had experienced since the end of World War I in 1918" },
        { id: 6, title: "World War II", type: "event", start: "1939-09-01", end: "1945-09-02", description: "The Second World War" },
        { id: 7, title: "Vietnam War", type: "event", start: "1955-11-01", end: "1975-04-30", description: "cold war" },
        { id: 8, title: "Gulf War", type: "event", start: "1990-08-02", end: "1991-02-28", description: "The Gulf War was an armed conflict between Iraq and a 42-country coalition led by the United States." },
        { id: 9, title: "Afghanistan War", type: "event", start: "2001-10-07", end: "2021-08-30", description: "Afghanistan War" },
        { id: 10, title: "Iraq War", type: "event", start: "2003-03-20", end: "2011-12-15", description: "Iraq War" },

        //seminar 1
        { id: 11, title: "Henry V", type: "other", start: "1599-12-12", description: "Play by William Shakespeare, first performed in 1599 and published in 1600, day published unkown", relatedEvents: [1, 2] },
        
        //seminar 2
        //{ id: 12, title: "Fears in Solitude", type: "poetry", start: "1798-04-01", description: "Poem by Samuel Taylor Coleridge, day published unkown", relatedEvents: []},
        //{ id: 14, title: "‘Sonnets Dedicated to Liberty’, ‘Character of the Happy Warrior’, ‘Composed in Recollection of the Expedition of the French into Russia’, ‘Inscription for a National Monument’", type: "poetry", start: "1854-12-09", description: "William Wordsworth", relatedEvents: []}, 
        //{ id: 13, title: "Ulysses", type: "poetry", start: "1842-01-01", description: "Poem by Alfred, Lord Tennyson", relatedEvents: []},
        { id: 12, title: "The Charge of the Light Brigade", type: "poetry", start: "1854-12-09", description: "Poem by Alfred, Lord Tennyson", relatedEvents: [3]},
        //{ id: 14, title: "Emily Dickinson’s Poems: As She Preserved Them", type: "poetry", start: "1854-12-09", description: "Emily Dickinson", relatedEvents: [3]},
        //{ id: 14, title: "‘Beat! Beat! Drums!’ (1861), ‘Come up from the Fields Father’ (1865), ‘Vigil Strange I Kept on the Field one Night’ (1865), ‘The Wound-Dresser’ (1876), ‘Reconciliation’ (1866)", type: "poetry", start: "1854-12-09", description: "Walt Whitman", relatedEvents: []},
        //{ id: 14, title: "‘Embarcation’, ‘The Colonel’s Soliloquy’, ‘Drummer Hodge’, ‘A Wife in London’ (1899), ‘The Man He Killed’ (1902)", type: "poetry", start: "1854-12-09", description: "Thomas Hardy", relatedEvents: []},
        
        //seminar 3

        //seminar 4
        { id: 13, title: "The Blind Man", type: "other", start: "1922-10-24", description: "Short Story by D.H. Lawrence", relatedEvents: [4]},
        { id: 14, title: "Mrs Dalloway", type: "novel", start: "1925-05-14", description: "Novel by Virginia Woolf", relatedEvents: [4]},
        { id: 15, title: "Across the Black Water", type: "novel", start: "1939-01-01", description: "Novel by Mulk Raj Anand, month day plushed unknown", relatedEvents: [4]},

        //seminar 5

        //seminar 6
        { id: 16, title: "High Explosive for Everyone", type: "news", start: "1937-07-01", description: "Martha Gellhorn", relatedEvents: [5]},
        { id: 17, title: "The Bomber Boys", type: "news", start: "1943-01-01", description: "Martha Gellhorn", relatedEvents: [6]},
        { id: 18, title: "A New Kind of War", type: "news", start: "1966-01-01", description: "Martha Gellhorn", relatedEvents: [7]},
        { id: 19, title: "Real War and the War of Words", type: "news", start: "1959-01-01", description: "Martha Gellhorn", relatedEvents: []},
    ];

    const eventToRelatedItems = {};
    warData.forEach(item => {
        if (item.type !== 'event' && item.relatedEvents) {
            item.relatedEvents.forEach(eventId => {
                if (!eventToRelatedItems[eventId]) {
                    eventToRelatedItems[eventId] = [];
                }
                eventToRelatedItems[eventId].push(item.id);
            });
        }
    });

    const items = new vis.DataSet(warData.map(entry => ({
        id: entry.id,
        start: entry.start,
        end: entry.end || null, 
        content: entry.title,
        type: 'box',
        className: entry.type 
    })));

    const options = {};
    const container = document.getElementById('timeline');
    const timeline = new vis.Timeline(container, items, options);

    document.getElementById('filter-all').addEventListener('click', () => filterData('all'));
    document.getElementById('filter-events').addEventListener('click', () => filterData('event'));
    document.getElementById('filter-film').addEventListener('click', () => filterData('film'));
    document.getElementById('filter-novel').addEventListener('click', () => filterData('novel'));
    document.getElementById('filter-poetry').addEventListener('click', () => filterData('poetry'));
    document.getElementById('filter-news').addEventListener('click', () => filterData('news'));
    document.getElementById('filter-other').addEventListener('click', () => filterData('other'));

    function filterData(filterType) {
      const filteredItems = warData.filter(item => filterType === 'all' || item.type === filterType).map(entry => ({
        id: entry.id,
        start: entry.start,
        end: entry.end || null,
        content: entry.title,
        type: 'box',
        className: entry.type
      }));
      timeline.setItems(new vis.DataSet(filteredItems));
    }

    timeline.on('select', function (properties) {
        const selectedId = properties.items[0];
        const selectedItem = warData.find(item => item.id === selectedId);

        clearHighlights();

        if (selectedItem) {
          let detailsHTML = `
              <strong>${selectedItem.title}</strong>
              <p>Date: ${selectedItem.start}${selectedItem.end ? ' to ' + selectedItem.end : ''}</p>
              <p>Description: ${selectedItem.description}</p>
          `;

          document.getElementById('details-content').innerHTML = detailsHTML;

          //console.log('DEBUG - selectedItem.title:', selectedItem.title);
          //console.log('DEBUG - eventToRelatedItems:', eventToRelatedItems);
          //console.log('DEBUG - eventToRelatedItems[selectedId]:', eventToRelatedItems[selectedId]);

          if (selectedItem.type === 'event' && eventToRelatedItems[selectedId]) {
            highlightFromEvent(selectedId);
          } else if ((selectedItem.type === 'film' || selectedItem.type === 'novel' || selectedItem.type === 'poetry' || selectedItem.type === 'news' || selectedItem.type === 'other') && selectedItem.relatedEvents) {
            highlightRelatedEvents(selectedItem.relatedEvents);
          }
        } 
    });

    function clearHighlights() {
      updateTimelineItems(warData.map(entry => ({
        ...entry,
        className: entry.type
      })));
    }

     function highlightRelatedEvents(relatedEventIds) {
        const highlightClass = 'highlight';
        updateTimelineItems(warData.map(entry => ({
            ...entry,
            className: relatedEventIds.includes(entry.id) ? entry.type + ' ' + highlightClass : entry.type
        })));
    }

    function highlightFromEvent(eventId) {
        const relatedItems = eventToRelatedItems[eventId] || [];
        highlightRelatedEvents(relatedItems);
    }

    function updateTimelineItems(items) {
        timeline.setItems(new vis.DataSet(items.map(entry => ({
            id: entry.id,
            start: entry.start,
            end: entry.end || null,
            content: entry.title,
            type: 'box',
            className: entry.className
        }))));
    }
});