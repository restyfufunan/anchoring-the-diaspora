var config = {
    style: 'mapbox://styles/restyf/clvu1gjwp05tj01pe8mqwak49',
    accessToken: 'pk.eyJ1IjoicmVzdHlmIiwiYSI6ImNrdzJ0ZWZoZjF6NWcyb3BhM3k4emxmbDgifQ.j4QqIsVk6b024MA65selJA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Anchoring the Diaspora',
    subtitle: 'Mapping Filipino Communities in Miami\'s Little Manila',
    byline: 'Resty Fufunan | CSTD 200 Final',
    footer: '<p style="text-align:center; font-size = 12px"> Adapted from author\'s undergraduate <a href = "https://drive.google.com/file/d/1ZAWkTdd4ll-XgTHLmtZGEH7dSMYmHb5f/view?usp=sharing"> senior thesis </a> in the Program of Ethnicity, Race, and Migration at Yale University. <br> Map polygons created with GeoJson. <br> Custom map icons sourced from <a href ="https://thenounproject.com/"> the Noun Project. </a> <br> Racial dot map from <a href = "https://www.cnn.com/interactive/2021/us/census-race-ethnicity-map/"> CNN. </a> <br> Designed using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template. </p>',
    chapters: [
        {
            id: 'painting',
            alignment: 'full',
            hidden: false,
            title: '',
            image: "./img/vintas.webp",
            description: '<p style="text-align:center;"> <i> The Great Wave and the Vintas II,</i> Elimar Pingkian </p>',
            location: {
                center: [-80.32456, 25.55183],
                zoom: 22,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'little-manila-square',
                    opacity:0
                },
                {
                    layer: 'little-manila-shops',
                    opacity:0
                },
                {
                    layer: 'short-route',
                    opacity: 0
                },
                {
                    layer: 'medium-route',
                    opacity: 0
                },
                {
                    layer: 'long-route',
                    opacity: 0
                },
                {
                    layer: 'anchor-spot',
                    opacity: 0
                }
                 
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'intro-sebastian',
            alignment: 'center',
            hidden: false,
            title: '',
            image: "./img/seb.jpg",
            description: 'In summer 2023, I visited my friend Sebastian in Miami.',
            location: {
                center: [-80.32456, 25.55183],
                zoom: 22,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'anchor-spot',
                    opacity: 0
                }
                 
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'intro-hispanic',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './img/hispanic.png',
            description: 'It\’s a pretty diverse city. The majority of residents identify as Hispanic—like Sebastian, whose family is Colombian.',
            location: {
                center: [-80.32456, 25.55183],
                zoom: 22,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'intro-black',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './img/black.png',
            description: 'There are also significant Black communities—many of whom are Haitian immigrants.',
            location: {
                center: [-80.32456, 25.55183],
                zoom: 22,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'intro-white',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './img/white.png',
            description: 'White residents are mostly found in more expensive areas, like Miami Beach or Coral Gables.',
            location: {
                center: [-80.32456, 25.55183],
                zoom: 22,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'intro-asian',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './img/asian.png',
            description: ' On the other hand, it\'s pretty hard to find a significant concentration of Asian American residents. Aside from a few scattered blue dots, there doesn\'t seem to be a significant Asian American community dots.',
            location: {
                center: [-80.32456, 25.55183],
                zoom: 22,
                pitch: 0,
                bearing: 0,
                duration: 5000,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'intro-filipino',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './img/sebipino.jpeg',
            description: 'So how did we end up eating a Filipino restaurant, in an area now known as Miami\'s Little Manila?',
            location: {
                center: [-80.19000, 25.77480],
                zoom: 18.37,
                pitch: 0,
                duration: 5000,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

                {
                    layer: 'little-manila-square',
                    opacity: 0
                },

                {
                    layer: 'little-manila-shops',
                    opacity: 1
                }
                 
            ],
            onChapterExit: [
                {
                    layer: 'little-manila-shops',
                    opacity: 0
                }
            ]
        },

        {
            id: 'header-history',
            alignment: 'full',
            hidden: false,
            title: '',
            description: '<h3 style="text-align:center; font-size:60pt;">  <br> <br> Little Manila exists at the confluence of two histories.  <br> <br> <br> </h3>',
            location: {
                center: [-63.81147, 22.43484],
                zoom: 3.85,
                pitch: 0,
                bearing: 0,
                duration: 5000
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

   
        {
            id: 'cruise-intro',
            alignment: 'right',
            hidden: false,
            title: 'First: Miami has the largest passenger port in the world.',
            description: 'Over 7 miliion tourists pass through Miami\'s port each year, bringing more than $43 billion to Miami\'s economy.',
            location: {
                center: [-63.81147, 22.43484],
                zoom: 3.85,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'short-route',
                    opacity: 0
                },
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cruise-short',
            alignment: 'right',
            hidden: false,
            title: '',
            description: 'There are shorter routes taking you to Mexico and back.',
            location: {
                center: [-63.81147, 22.43484],
                zoom: 3.85,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                 layer: 'short-route',
                 opacity: 1

                },

                {
                    layer: 'medium-route',
                    opacity: 0
                }

            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cruise-medium',
            alignment: 'right',
            hidden: false,
            title: '',
            description: 'Routes that hop around different Caribbean islands.',
            location: {
                center: [-63.81147, 22.43484],
                zoom: 3.85,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'medium-route',
                    opacity: 1
                },
                {
                    layer: 'long-route',
                    opacity: 0
                }
                 
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cruise-long',
            alignment: 'right',
            hidden: false,
            title: '',
            description: 'Or weeklong adventures that do all of them! <br> <br> Maintaining these cruises requires a significant labor force. This brings us to our second history. . .',
            location: {
                center: [-63.81147, 22.43484],
                zoom: 3.85,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

                {
                    layer: 'short-route',
                    opacity: 1
                },

                {
                    layer: 'medium-route',
                    opacity: 1
                },
                {
                    layer: 'long-route',
                    opacity: 1
                },
                 
            ],
            onChapterExit: [

            ]
        },
        
        {
            id: 'turns-out',
            alignment: 'full',
            hidden: false,
            title: 'As it turns out, of the nearly 200,000 workers employed in cruise ships. . .',
            image: "./img/sailor.png",
            description: '<p style="text-align:right;"> . . .almost <b> one third </b> of them are Filipino. </p>',
            location: {
                center: [-63.81147, 22.43484],
                zoom: 3.85,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'short-route',
                    opacity: 0
                },
                {
                    layer: 'medium-route',
                    opacity: 0
                },
                {
                    layer: 'long-route',
                    opacity: 0
                }
                 
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'over-time',
            alignment: 'left',
            hidden: false,
            title: 'When cruises dock at Miami\'s port, the  workers only have a limited time off the ship. ',
            description: 'Over the years, a robust network of Filipino restaurants and businesses have sprung up near the port. <br> <br> I wrote my senior thesis about these communities. Here are some of the things I learned.',
            location: {
                center: [-80.19000, 25.77480],
                zoom: 15,
                pitch: 0,
                duration: 5000,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

                {
                    layer: 'little-manila-square',
                    opacity: 1
                },

                {
                    layer: 'little-manila-shops',
                    opacity: 0
                },
                 
            ],
            onChapterExit: [
                {
                    layer: 'little-manila-square',
                    opacity: 0
                }
            ]
        },

        {
            id: 'visual-culture',
            alignment: 'left',
            hidden: false,
            title: 'VISUAL CULTURE',
            description: 'To attract a wide consumer base, restaurants employ a wide amount of visual tactics to attract customers. On the left, Aklan Sushi and Buffet draws on indigenous iconography to evoke a sense of national identity. On the other hand, the mural found in San Villa Buffet employs a more broad Asian aesthetic. ',
            image: "./img/visual-culture.png",
            location: {
                center: [-80.19000, 25.77480],
                zoom: 18.37,
                pitch: 0,
                duration: 2000,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

                {
                    layer: 'little-manila-shops',
                    opacity: 1
                },
                 
            ],
        },


        {
            id: 'culinary-heritage',
            alignment: 'left',
            hidden: false,
            title: 'CULINARY HERITAGE',
            description: '<video height = "480"  controls> <source src="./img/festival-food.mp4" type="video/mp4"/> </video> <br> As you can tell by the restaurant names, a good amount of these restaurants are buffets. They serve what\'s known as "festival food," or food that\'s normally reserved for grand occasions. Now that they have disposable income, this food becomes a class marker. ',
            location: {
                center: [-80.19000, 25.77480],
                zoom: 18.37,
                pitch: 0,
                duration: 2000,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
        },


        {
            id: 'community-formation',
            alignment: 'left',
            hidden: false,
            image: "./img/lola.JPG",
            title: 'COMMUNITY FORMATION',
            description: 'Over time, the restaurant owners and the cruise ship workers have formed tight bonds. While the community may be transient—never docked for more than a couple hours—they will always make their way back to Little Manila.',
            location: {
                center: [-80.19000, 25.77480],
                zoom: 18.37,
                pitch: 0,
                duration: 2000,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

                {
                    layer: 'little-manila-shops',
                    opacity: 1
                },

                {
                layer: 'anchor-spot',
                opacity: 0
                }
                 
            ]
        },

    

        {
            id: 'pinoy-banner',
            alignment: 'full',
            hidden: false,
            image: "./img/banner.jpeg",
            location: {
                center: [-63.81147, 22.43484],
                zoom: 3.85,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',

            onChapterEnter: [
                {
                    layer: 'anchor-spot',
                    opacity: 0
                },
                {
                    layer: 'little-manila-shops',
                    opacity: 0
                }
            ],

        },

        {
            id: 'little-manila-carib',
            alignment: 'right',
            hidden: false,
            title: 'It turns out these anchor spots are everywhere.',
            description: 'In addition to Miami\'s Little Manila, Filipino restaurants pop up anywhere there\'s a port. There\'s a bunch across the Caribbean. . .',
            location: {
                center: [-63.81147, 22.43484],
                zoom: 3.85,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

                {
                    layer: 'short-route',
                    opacity: 1
                },

                {
                    layer: 'medium-route',
                    opacity: 1
                },
                {
                    layer: 'long-route',
                    opacity: 1
                },

                {
                    layer: 'anchor-spot',
                    opacity: 1
                }
                 
            ],
            onChapterExit: [

                {
                    layer: 'short-route',
                    opacity: 0
                },

                {
                    layer: 'medium-route',
                    opacity: 0
                },
                {
                    layer: 'long-route',
                    opacity: 0
                },

                {
                    layer: 'anchor-spot',
                    opacity: 1
                }
                 
            ],
        },

        {
            id: 'little-manila-pnw',
            alignment: 'left',
            hidden: false,
            description: '. . .and even a bunch in Alaska and the Pacific Northwest. <br><br> Where there are cruise ports, there are Filipinos—and where there are Filipinos, there are Filipino restaurants.',
            location: {
                center: [-134.47436, 38.64120],
                zoom: 2.39,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: "anchor-spot",
                    opacity: 1
                }
            ]

        },

        {
            id: 'back-to-little-manila',
            alignment: 'center',
            hidden: true,
            location: {
                center: [-80.18942, 25.77472],
                zoom: 18.09,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',

            onChapterEnter:[
                {
                    layer: 'little-manila-shops',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'anchor-spot',
                    opacity: 0
                },
            ]

        },

        {
            id: 'back-to-little-manila-desc',
            alignment: 'center',
            hidden: false,
            description: "Now look carefully again at this map of Little Manila.",
            location: {
                center: [-80.18942, 25.77472],
                zoom: 18.09,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter:[
                {
                    layer: 'little-manila-shops',
                    opacity: 1
                }
            ]

        },

        {
            id: 'back-to-little-manila-2',
            alignment: 'center',
            hidden: false,
            description: "See this dashed line here?",
            location: {
                center: [-80.18939, 25.77429],
                zoom: 22.00,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',

        },

        {
            id: 'closed-down',
            alignment: 'center',
            hidden: false,
            description: "The city government closed down the road for construction.",
            image: "./img/construction.jpg",
            location: {
                center: [-80.18939, 25.77429],
                zoom: 22.00,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',

        },

        {
            id: 'festival',
            alignment: 'center',
            hidden: false,
            description: "They're widening the street to create a more pedestrian-friendly downtown. The roads can be closed for street fairs, festivals, and other large events. ",
            image: "./img/joggers.jpeg",
            location: {
                center: [-80.18939, 25.77429],
                zoom: 22.00,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',

        },

        {
            id: 'redevelopment',
            alignment: 'center',
            hidden: false,
            description: "It's part of a wider effort to redevelop the area to attract more tourists. The city is envisioning a downtown filled with high-end shopping, hotels, and upscale dining. <br> <br> But does this artist rendering have space for a Little Manila?",
            image: "./img/flagler-night.jpg",
            location: {
                center: [-80.18939, 25.77429],
                zoom: 22.00,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',

        },

        {
            id: 'conclusion',
            alignment: 'full',
            hidden: false,
            title: "Though this new development may seem to threaten Little Manila. . . ",
            image: "./img/kantina.jpg",
            description: '<p style="text-align:right;"> . . .the stores don\'t anchor the community. The people do. As long as Filipinos remain closely entwined with the seafaring profession, these workers will always follow the cruise ship industry—wherever it may be anchored.',
            location: {
                center: [-80.18939, 25.77429],
                zoom: 22.00,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',

        },


















    ]
};
