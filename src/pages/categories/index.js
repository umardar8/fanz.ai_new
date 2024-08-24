import React from "react";
import Layout from "../../layout/web-layout";
import BaseColors from "../../constant";
import {
  FaVideo,
  FaMusic,
  FaBroadcastTower,
  FaNewspaper,
} from "react-icons/fa"; // Import icons from react-icons

const categoriesData = [
  {
    title: "Discover What to Watch Next",
    description: (
      <>
        Explore the selection of content. Find{" "}
        <br className="d-none d-lg-block" /> your favorite shows, movies, music,
        and more!
      </>
    ),
    category: [
      {
        icon: (
          <>
            <FaVideo size={30} />
          </>
        ),
        title: "Video Streaming",
        description:
          "Discover a variety of movies, TV shows, and series. Enjoy the latest releases and classic favorites in high-quality video.",
        // subcategories: {
        //   entertainment: {
        //     title: "Entertainment",
        //     items: [
        //       { name: "Movies", description: "Feature films, independent films, international cinema." },
        //       { name: "TV Shows", description: "Series, soap operas, miniseries, documentaries." },
        //       { name: "Comedies", description: "Stand-up specials, sketch shows, sitcoms." },
        //       { name: "Drama", description: "Crime dramas, historical dramas, romance." },
        //     ],
        //   },
        //   sports: {
        //     title: "Sports",
        //     items: [
        //       { name: "Live Sports", description: "Football, basketball, baseball, soccer, hockey." },
        //       { name: "Sports Highlights", description: "Game recaps, player highlights." },
        //       { name: "Sports Talk", description: "Analysis, commentary, sports news." },
        //     ],
        //   },
        //   news: {
        //     title: "News",
        //     items: [
        //       { name: "Live News", description: "Breaking news, live updates, news channels." },
        //       { name: "Documentaries", description: "In-depth explorations of current events." },
        //       { name: "Political Commentary", description: "Analysis and discussion of political issues." },
        //     ],
        //   },
        //   educational: {
        //     title: "Educational",
        //     items: [
        //       { name: "Documentaries", description: "Historical, scientific, nature documentaries." },
        //       { name: "Courses", description: "Online classes, lectures, tutorials." },
        //       { name: "How-to Guides", description: "DIY videos, cooking shows, tech tutorials." },
        //     ],
        //   },
        //   gaming: {
        //     title: "Gaming",
        //     items: [
        //       { name: "Let’s Plays", description: "Playthroughs, game reviews." },
        //       { name: "eSports", description: "Competitive gaming, tournaments." },
        //       { name: "Game Development", description: "Behind-the-scenes looks, developer interviews." },
        //     ],
        //   },
        //   music: {
        //     title: "Music",
        //     items: [
        //       { name: "Music Videos", description: "Official videos, lyric videos." },
        //       { name: "Concerts", description: "Live performances, recorded concerts." },
        //       { name: "Music Channels", description: "Artist channels, genre-specific channels." },
        //     ],
        //   },
        // },
      },
      {
        icon: (
          <>
            <FaMusic size={30} />
          </>
        ),
        title: "Audio Streaming",
        description:
          "Stream your favorite music, discover new artists, and enjoy curated playlists. From trending hits to classic tunes, find it all here.",
        // subcategories: {
        //   music: {
        //     title: "Music",
        //     items: [
        //       { name: "Genres", description: "Pop, rock, jazz, classical, hip-hop, electronic." },
        //       { name: "Playlists", description: "Curated collections for mood, activity, or genre." },
        //       { name: "Radio", description: "Live radio stations, talk shows, DJ sets." },
        //     ],
        //   },
        //   podcasts: {
        //     title: "Podcasts",
        //     items: [
        //       { name: "Talk Shows", description: "Interviews, discussions on various topics." },
        //       { name: "Storytelling", description: "Fictional stories, serialized dramas." },
        //       { name: "Educational", description: "Lectures, academic discussions, how-to guides." },
        //     ],
        //   },
        //   audiobooks: {
        //     title: "Audiobooks",
        //     items: [
        //       { name: "Fiction", description: "Novels, short stories." },
        //       { name: "Non-Fiction", description: "Biographies, self-help, history." },
        //     ],
        //   },
        // },
      },
      {
        icon: (
          <>
            <FaBroadcastTower size={30} />
          </>
        ),
        title: "Live Streaming",
        description:
          "Watch live events, sports, and more as they happen. Stay connected with real-time broadcasts and live coverage.",
        // subcategories: {
        //   socialMedia: {
        //     title: "Social Media",
        //     items: [
        //       { name: "Personal Streams", description: "Influencers, personal blogs." },
        //       { name: "Events", description: "Live Q&A sessions, personal milestones." },
        //     ],
        //   },
        //   professional: {
        //     title: "Professional",
        //     items: [
        //       { name: "Conferences", description: "Industry events, webinars, seminars." },
        //       { name: "Workshops", description: "Professional training, skill-building sessions." },
        //     ],
        //   },
        //   interactiveContent: {
        //     title: "Interactive Content",
        //     items: [
        //       { name: "Gaming", description: "Live gameplay, interactive streams with audience participation." },
        //       { name: "Talk Shows", description: "Live interviews, audience Q&A." },
        //     ],
        //   },
        // },
      },
      {
        icon: (
          <>
            <FaNewspaper size={30} />
          </>
        ),
        title: "Emerging Streaming",
        description:
          "Explore VR, AR, and innovative streaming technologies. Experience new ways to engage with content or interact with media.",
        // subcategories: {
        //   vr: {
        //     title: "Virtual Reality (VR)",
        //     items: [
        //       { name: "Immersive Experiences", description: "VR concerts, virtual travel, interactive VR environments." },
        //     ],
        //   },
        //   ar: {
        //     title: "Augmented Reality (AR)",
        //     items: [
        //       { name: "Enhanced Media", description: "AR-enhanced live streaming, interactive AR content." },
        //     ],
        //   },
        //   fitness: {
        //     title: "Fitness",
        //     items: [
        //       { name: "Workout Classes", description: "Yoga, pilates, high-intensity interval training (HIIT)." },
        //       { name: "Fitness Challenges", description: "Live workout sessions, virtual races." },
        //     ],
        //   },
        // },
      },
    ],
  },
];

export default function Categories() {
  return (
    <Layout>
      {categoriesData.map((x, index) => (
        <div
          className="position-relative d-flex mt-5 pt-5 mx-0 px-0"
          key={index}
        >
          <div className="container py-5 py-5">
            <div className="text-start pt-5">
              <h6
                className="text-family fw-bolds py-2"
                style={{ color: BaseColors.danger }}
              >
                {/* Discover What to Watch Next */}
                {/* main title */}
                {x.title}
              </h6>
              <p className="text-3 text-white ">
                {/* main haeding */}
                {x.description}
                {/* Explore the selection of content. Find <br className="d-none d-lg-block" /> your favorite shows, movies, music, and more! */}
              </p>
            </div>
            <div className="d-flex row m-0 py-5 gap-auto">
              {x.category.map((x, index) => (
                <div className="col py-3 pe-3" key={index}>
                  <div
                    className="text-white px-3 py-4 d-flex flex-column align-items-start "
                    style={{
                      background: BaseColors.black,
                      borderRadius: "15px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="d-flex align-items-center me-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        backgroundColor: "#333",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {x.icon}
                    </div>
                    <div>
                      <h5 className="my-2">{x.title}</h5>
                      <p className="text-justify text-family text-size-2">
                        {x.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* <div className="col py-3 pe-3">
                <div className="text-white px-3 py-2 d-flex flex-column align-items-start " style={{ background: BaseColors.black, borderRadius: '15px', display: 'flex', alignItems: 'center' }}>
                  <div className="d-flex align-items-center me-3" style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#333', justifyContent: 'center', alignItems: 'center' }}>
                    <FaVideo size={30} />
                  </div>
                  <div>
                    <h5 className="my-2">Video Streaming</h5>
                    <p className="text-justify text-family text-size-2">Discover a variety of movies, TV shows, and series. Enjoy the latest releases and classic favorites in high-quality video.</p>
                  </div>
                </div>
              </div>
              <div className="col py-3 pe-3">
                <div className="text-white px-3 py-2 d-flex flex-column align-items-start" style={{ background: BaseColors.black, borderRadius: '15px', display: 'flex', alignItems: 'center' }}>
                  <div className="d-flex align-items-center me-3" style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#333', justifyContent: 'center', alignItems: 'center' }}>
                    <FaMusic size={30} />
                  </div>
                  <div>
                    <h5 className="my-2">Audio Streaming</h5>
                    <p className="text-justify text-family text-size-2">Stream your favorite music, discover new artists, and enjoy curated playlists. From trending hits to classic tunes, find it all here.</p>
                  </div>
                </div>
              </div>
              <div className="col py-3 pe-3">
                <div className="text-white px-3 py-2 d-flex flex-column align-items-start" style={{ background: BaseColors.black, borderRadius: '15px', display: 'flex', alignItems: 'center' }}>
                  <div className="d-flex align-items-center me-3" style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#333', justifyContent: 'center', alignItems: 'center' }}>
                    <FaBroadcastTower size={30} />
                  </div>
                  <div>
                    <h5 className="my-2">Live Streaming</h5>
                    <p className="text-justify text-family text-size-2">Watch live events, sports, and more as they happen. Stay connected with real-time broadcasts and live coverage.</p>
                  </div>
                </div>
              </div>
              <div className="col py-3 pe-3">
                <div className="text-white px-3 py-2 d-flex flex-column align-items-start" style={{ background: BaseColors.black, borderRadius: '15px', display: 'flex', alignItems: 'center' }}>
                  <div className="d-flex align-items-center me-3" style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#333', justifyContent: 'center', alignItems: 'center' }}>
                    <FaNewspaper size={30} />
                  </div>
                  <div>
                    <h5 className="my-2">Emerging Streaming</h5>
                    <p className="text-justify text-family text-size-2">Explore VR, AR, and innovative streaming technologies. Experience new ways to engage with content or interact with media</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      ))}
    </Layout>
  );
}
