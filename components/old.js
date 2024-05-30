/*const Header = () => (
    <header>
      <h1>Imagining War: The Art and Literature of Conflict Timeline</h1>
      <p>
        "Every war story, according to Leo Tolstoy, begins with the disclaimer that war cannot be understood by those who have not witnessed it for themselves – yet the story is always told anyway."
        <br />
        <br />
        This tool compiles information on war literature's themes (memorialization of past wars, anticipation of future ones), tropes (the soldier’s departure/homecoming, the horror of battle, eyewitnesses who did not fight), and narrative forms (poetry, novels, narrative journalism). Click on the timeline for more information and to discover related events or texts. These, if any, will be highlighted yellow. This project is ongoing.
      </p>
    </header>
  );
  
  export default Header;
 */ 

  import { useEffect } from 'react';

const Timeline = () => {
  useEffect(() => {
    const warData = [
      //events
      {
          id: 1,
          title: "The Hundred Years' War",
          type: "event",
          start: "1337-05-24",
          end: "1453-10-19",
          description: "The Hundred Years’ War was a 100+ year-long intermittent struggle between England and France in the 14th–15th century over a series of disputes, including the question of the legitimate succession to the French crown. By convention the war is said to have started with the confiscation of the English-held duchy of Guyenne by French King Philip VI. This confiscation, however, had been preceded by periodic fighting over the question of English fiefs in France going back to the 12th century (Britannica).",
          relatedEvents: []
      },
      {
          id: 2,
          title: "Battle of Agincourt",
          type: "event",
          start: "1415-10-25",
          description: "The Battle of Agincourt was a decisive battle in the Hundred Years’ War that resulted in an English victory. The English army, led by King Henry V, famously achieved victory in spite of the numerical superiority of the French, in part from the use of the English longbow in large number. It is arguable one of the most important English battles for patriotism (Britannica).",
          relatedEvents: []
      },
      {
          id: 3,
          title: "Crimean War",
          type: "event",
          start: "1853-10-05",
          end: "1856-03-30",
          description: "The Crimean War was fought between the Russian Empire and an ultimately victorious alliance of Ottoman Turkey, France, the United Kingdom, and Sardinia-Piedmont. This conflict marked a significant moment in the decline of the Ottoman Empire and showcased the power struggles in Eastern Europe and the Middle East (Britannica).",
          relatedEvents:[]
      },
      {
          id: 4,
          title: "World War I",
          type: "event",
          start: "1914-07-28",
          end: "1918-11-11",
          description: "Also known as the Great War, WWI was an international war centered in Europe and was virtually unprecedented in the slaughter and destruction it caused. The Central Powers (mainly Germany, Austria-Hungary, and Turkey) were defeated by the Allies (mainly France, Great Britain, Russia, Italy, Japan, and the U.S). It led to the fall of four imperial dynasties and ended with significant geopolitical changes (Brittanica).",
          relatedEvents:[]
      },
      {
          id: 5,
          title: "Spanish Civil War",
          type: "event",
          start: "1936-07-17",
          end: "1939-04-01",
          description: "The Spanish Civil War was marked by deep national divisions within Spain with the Nationalists receiving aid from Fascist Italy and Nazi Germany and the Republicans receiving aid from the Soviet Union and the International Brigades. This was the bloodiest conflict western Europe had experienced since the end of World War I and preluded World War II (Brittanica).",
          relatedEvents: []
      },
      {
          id: 6,
          title: "World War II",
          type: "event",
          start: "1939-09-01",
          end: "1945-09-02",
          description: "WWII was the deadliest and most widespread war in history, involving more than 30 countries and resulting in changes to nations and territories. The Axis powers (Germany, Italy, and Japan) were defeated by the Allies (France, Great Britain, the United States, the Soviet Union, and China). WWII was in many respects a continuation of the disputes left unsettled by WWI (Brittanica).",
          relatedEvents: []
      },
      {
          id: 7,
          title: "Vietnam War",
          type: "event",
          start: "1955-11-01",
          end: "1975-04-30",
          description: "Also known as the “American War” in Vietnam (or “War Against the Americans to Save the Nation”), the Vietnam War was a prolonged conflict that epitomized the Cold War's influence in Asia, demonstrating the USA's anti-communist policy. The communist government of North Vietnam and its allies in South Vietnam, the Viet Cong, defeated the government of South Vietnam and the United States (Britannica).",
          relatedEvents: []
      },
      {
          id: 8,
          title: "Gulf War",
          type: "event",
          start: "1990-08-02",
          end: "1991-02-28",
          description: "Initiated by Iraq's invasion of Kuwait, the Persian Gulf War led to a coalition victory led by the United States, showcasing the effectiveness of modern military technology. It was the first major international crisis of the post-Cold War era (Britannica).",
          relatedEvents: []
      },
      {
          id: 9,
          title: "Afghanistan War",
          type: "event",
          start: "2001-10-07",
          end: "2021-08-30",
          description: "The Afghanistan War was a long-lasting conflict initiated by the US to dismantle Al-Qaeda and remove the Taliban from power following the 9/11 attacks, leading to years of guerrilla warfare and an ultimately unsuccessful transfer of power back to Afghan military against the Taliban (Britannica).",
          relatedEvents: []
      },
      {
          id: 10,
          title: "Iraq War",
          type: "event",
          start: "2003-03-20",
          end: "2011-12-15",
          description: "Also known as the Second Gulf War, the Iraq War began with the U.S.- and Great Britain-led invasion to overthrow Saddam Hussein, leading to prolonged military and social strife.",
          relatedEvents: []
      },

      //seminar 1
      {
          id: 11,
          title: "Henry V",
          type: "other",
          start: "1599",
          description: "Play by William Shakespeare, first performed in 1599 and published in 1600 which was a tumultous time of war and succession in England (shakespeare on the elizabethean stage was a propoganda of sorts through english military history, historical omission, and news from recent battles). Henry V is the last in a sequence of four plays (Richard II, Henry IV part 1, and part 2), also known as the second tetralogy. Henry V is introduced in his aloof youth in the Henry IV plays which becomes a focal point of his character in Henry V. The play is structured in five choruses that call on the audience to imagine the details of the war that cannot appear on stage, meta-textually doubting its format's ability to present war. Shakespeare chooses not to include the significant role of longbows in the Battle of Agincourt, abstractly attributing the victory over France to Henry V's military leadership rather than to military technology, suggesting that England was chosen by God and morally superior to their enemies. In the final chorus, Shakespeare reminds the audience that Henry V's military triumph was only temporary, calling back to the Herny VI play of the first tetralogy and in a way what a waste it all was. The Henriad plays start and end at the same point which one could argue holds the anti-war sentiment of war never profiting anyone and war history going in circles.",
          relatedEvents: [1, 2]
      },

      //seminar 2
      //{ id: 12, title: "Fears in Solitude", type: "poetry", start: "1798-04-01", description: "Poem by Samuel Taylor Coleridge, day published unkown", relatedEvents: []},
      //{ id: 14, title: "‘Sonnets Dedicated to Liberty’, ‘Character of the Happy Warrior’, ‘Composed in Recollection of the Expedition of the French into Russia’, ‘Inscription for a National Monument’", type: "poetry", start: "1854-12-09", description: "William Wordsworth", relatedEvents: []}, 
      //{ id: 13, title: "Ulysses", type: "poetry", start: "1842-01-01", description: "Poem by Alfred, Lord Tennyson", relatedEvents: []},
      {
          id: 12,
          title: "The Charge of the Light Brigade",
          type: "poetry",
          start: "1854-12-09",
          description: "Poem by Alfred, Lord Tennyson memorializing the valiant but disastrous cavalry charge during the Battle of Balaclava in the Crimean War.",
          relatedEvents: [3]
      },
      //{ id: 14, title: "Emily Dickinson’s Poems: As She Preserved Them", type: "poetry", start: "1854-12-09", description: "Emily Dickinson", relatedEvents: [3]},
      //{ id: 14, title: "‘Beat! Beat! Drums!’ (1861), ‘Come up from the Fields Father’ (1865), ‘Vigil Strange I Kept on the Field one Night’ (1865), ‘The Wound-Dresser’ (1876), ‘Reconciliation’ (1866)", type: "poetry", start: "1854-12-09", description: "Walt Whitman", relatedEvents: []},
      //{ id: 14, title: "‘Embarcation’, ‘The Colonel’s Soliloquy’, ‘Drummer Hodge’, ‘A Wife in London’ (1899), ‘The Man He Killed’ (1902)", type: "poetry", start: "1854-12-09", description: "Thomas Hardy", relatedEvents: []},

      //seminar 3

      //seminar 4
      {
          id: 13,
          title: "The Blind Man",
          type: "other",
          start: "1922-10-24",
          description: "Short Story by D.H. Lawrence. This story explores themes of love, loss, and the complexities of human relationships in the aftermath of World War I.",
          relatedEvents: [4]
      },
      {
          id: 14,
          title: "Mrs Dalloway",
          type: "novel",
          start: "1925-05-14",
          description: "Novel by Virginia Woolf. This book captures the interwar period's social and psychological atmosphere through the experiences of its characters on a post-WWI day in London.",
          relatedEvents: [4]
      },
      {
          id: 15,
          title: "Across the Black Water",
          type: "novel",
          start: "1939",
          description: "Novel by Mulk Raj Anand. This novel provides a critical perspective on the Indian experience in World War I, focusing on issues of race, class, and empire.",
          relatedEvents: [4]
      },

      //seminar 5

      //seminar 6
      {
          id: 16,
          title: "High Explosive for Everyone",
          type: "news",
          start: "1937-07-01",
          description: "News / war reporting / journalistic work by Martha Gellhorn highlighting the impact of the Spanish Civil War on civilians, emphasizing the brutality and senselessness of war.",
          relatedEvents: [5]
      },
      {
          id: 17,
          title: "The Bomber Boys",
          type: "news",
          start: "1943-01-01",
          description: "News / war reporting / journalistic work by Martha Gellhorn. This coverage of World War II focuses on the air crews and their crucial role in the conflict, showcasing Gelhorn's on-the-ground journalism.",
          relatedEvents: [6]
      },
      {
          id: 18,
          title: "A New Kind of War",
          type: "news",
          start: "1966-01-01",
          description: "News / war reporting / journalistic work by Martha Gellhorn. Gellhorn's insights into the Vietnam War, reflecting on the unique aspects of the conflict and its profound impact on American society and military strategy.",
          relatedEvents: [7]
      },
      {
          id: 19,
          title: "Real War and the War of Words",
          type: "news",
          start: "1959-01-01",
          description: "News / war reporting / journalistic work by Martha Gellhorn. An exploration of the evolving nature of war reporting and the contrast between the reality on the ground and its portrayal in media through Gellhorn's critical lens.",
          relatedEvents: []
      },

      //seminar 7

      //seminar 8
  ];

  //relation
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
  })))
  const options = {};
const container = document.getElementById('timeline');
        let timeline = null;

        if (container) {
            timeline = new vis.Timeline(container, items, options);

            const filterData = (filterType) => {
                const filteredItems = warData.filter(item => filterType === 'all' || item.type === filterType).map(entry => ({
                    id: entry.id,
                    start: entry.start,
                    end: entry.end || null,
                    content: entry.title,
                    type: 'box',
                    className: entry.type
                }));
                timeline.setItems(new vis.DataSet(filteredItems));
            };

            const handleSelect = (properties) => {
                const selectedId = properties.items[0];
                const selectedItem = warData.find(item => item.id === selectedId);
                clearHighlights();
                if (selectedItem) {
                    let relatedEventsTitles = '';
                    if (selectedItem.relatedEvents && selectedItem.relatedEvents.length > 0) {
                        relatedEventsTitles = selectedItem.relatedEvents.map(eventId => {
                            const relatedEvent = warData.find(event => event.id === eventId);
                            return relatedEvent ? relatedEvent.title : 'Unknown Event';
                        }).join(', ');
                    } else if (eventToRelatedItems[selectedId] && eventToRelatedItems[selectedId].length > 0) {
                        relatedEventsTitles = eventToRelatedItems[selectedId].map(eventId => {
                            const relatedEvent = warData.find(event => event.id === eventId);
                            return relatedEvent ? relatedEvent.title : 'Unknown Event';
                        }).join(', ');
                    }

                    const detailsHTML = `
                        <u>${selectedItem.title}</u>
                        <p>Date: ${selectedItem.start}${selectedItem.end ? ' to ' + selectedItem.end : ''}</p>
                        <p>Description: ${selectedItem.description}</p>
                        <p>Related Events: ${relatedEventsTitles}</p>
                    `;
                    document.getElementById('details-content').innerHTML = detailsHTML;
                    if (selectedItem.type === 'event' && eventToRelatedItems[selectedId]) {
                        highlightFromEvent(selectedId);
                    } else if (selectedItem.relatedEvents) {
                        highlightRelatedEvents(selectedItem.relatedEvents);
                    }
                }
            };

            const clearHighlights = () => {
                updateTimelineItems(warData.map(entry => ({
                    ...entry,
                    className: entry.type
                })));
            };

            const highlightRelatedEvents = (relatedEventIds) => {
                const highlightClass = 'highlight';
                updateTimelineItems(warData.map(entry => ({
                    ...entry,
                    className: relatedEventIds.includes(entry.id) ? entry.type + ' ' + highlightClass : entry.type
                })));
            };

            const highlightFromEvent = (eventId) => {
                const relatedItems = eventToRelatedItems[eventId] || [];
                highlightRelatedEvents(relatedItems);
            };

            const updateTimelineItems = (items) => {
                timeline.setItems(new vis.DataSet(items.map(entry => ({
                    id: entry.id,
                    start: entry.start,
                    end: entry.end || null,
                    content: entry.title,
                    type: 'box',
                    className: entry.className
                }))));
            };

            document.getElementById('filter-all').addEventListener('click', () => filterData('all'));
            document.getElementById('filter-events').addEventListener('click', () => filterData('event'));
            document.getElementById('filter-film').addEventListener('click', () => filterData('film'));
            document.getElementById('filter-novel').addEventListener('click', () => filterData('novel'));
            document.getElementById('filter-poetry').addEventListener('click', () => filterData('poetry'));
            document.getElementById('filter-news').addEventListener('click', () => filterData('news'));
            document.getElementById('filter-other').addEventListener('click', () => filterData('other'));

            timeline.on('select', handleSelect);

            document.getElementById('searchInput').addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                filterDataBySearchTerm(searchTerm);
            });

            document.getElementById('searchButton').addEventListener('click', () => {
                const searchTerm = document.getElementById('searchInput').value.toLowerCase();
                filterDataBySearchTerm(searchTerm);
            });

            const filterDataBySearchTerm = (searchTerm) => {
                const filteredItems = warData.filter(item =>
                    item.title.toLowerCase().includes(searchTerm) ||
                    (item.description && item.description.toLowerCase().includes(searchTerm))
                ).map(entry => ({
                    id: entry.id,
                    start: entry.start,
                    end: entry.end || null,
                    content: entry.title,
                    type: 'box',
                    className: entry.type
                }));
                timeline.setItems(new vis.DataSet(filteredItems));
            };
        }

        return () => {
            if (timeline) {
                timeline.destroy();
            }
            document.getElementById('filter-all').removeEventListener('click', () => filterData('all'));
            document.getElementById('filter-events').removeEventListener('click', () => filterData('event'));
            document.getElementById('filter-film').removeEventListener('click', () => filterData('film'));
            document.getElementById('filter-novel').removeEventListener('click', () => filterData('novel'));
            document.getElementById('filter-poetry').removeEventListener('click', () => filterData('poetry'));
            document.getElementById('filter-news').removeEventListener('click', () => filterData('news'));
            document.getElementById('filter-other').removeEventListener('click', () => filterData('other'));
            document.getElementById('searchInput').removeEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                filterDataBySearchTerm(searchTerm);
            });
            document.getElementById('searchButton').removeEventListener('click', () => {
                const searchTerm = document.getElementById('searchInput').value.toLowerCase();
                filterDataBySearchTerm(searchTerm);
            });
        };
    }, []);

    return null;
}

export default Timeline;