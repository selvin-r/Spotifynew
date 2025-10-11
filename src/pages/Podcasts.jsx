// import React, { useState } from "react";
//
// const PodcastSection = () => {
//     const [selectedPodcast, setSelectedPodcast] = useState(null);
//
//     // Example data — replace with your real podcast list
//     const podcasts = [
//         {
//             id: 1,
//             title: "Munpani Kaadhal",
//             desc: "Your weekly update of the most played tracks",
//             img: "https://picsum.photos/seed/p1/300/300",
//             audio: "/audios/podcast1.mp3",
//         },
//         {
//             id: 2,
//             title: "10s Romance Tamil",
//             desc: "Best Love Songs of 2010s from Kollywood",
//             img: "https://picsum.photos/seed/p2/300/300",
//             audio: "/audios/podcast2.mp3",
//         },
//         {
//             id: 3,
//             title: "A.R. Rahman Mix",
//             desc: "Hits of A.R. Rahman that will move you",
//             img: "https://picsum.photos/seed/p3/300/300",
//             audio: "/audios/podcast3.mp3",
//         },
//     ];
//
//     return (
//         <div className="p-6 text-white">
//             {/* Title */}
//             <h2 className="text-2xl font-bold mb-4">Top Podcasts</h2>
//
//             {/* Podcast Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                 {podcasts.map((pod) => (
//                     <div
//                         key={pod.id}
//                         className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition cursor-pointer"
//                         onClick={() => setSelectedPodcast(pod)}
//                     >
//                         <img
//                             src={pod.img}
//                             alt={pod.title}
//                             className="rounded-md w-full h-48 object-cover mb-3"
//                         />
//                         <h3 className="text-lg font-semibold">{pod.title}</h3>
//                         <p className="text-gray-400 text-sm">{pod.desc}</p>
//                     </div>
//                 ))}
//             </div>
//
//             {/* Podcast Player */}
//             {selectedPodcast && (
//                 <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 p-4 flex items-center justify-between">
//                     <div className="flex items-center gap-4">
//                         <img
//                             src={selectedPodcast.img}
//                             alt={selectedPodcast.title}
//                             className="w-16 h-16 rounded-md"
//                         />
//                         <div>
//                             <h4 className="font-semibold">{selectedPodcast.title}</h4>
//                             <p className="text-sm text-gray-400">{selectedPodcast.desc}</p>
//                         </div>
//                     </div>
//                     <audio
//                         src={selectedPodcast.audio}
//                         controls
//                         autoPlay
//                         className="w-64"
//                     />
//                     <button
//                         onClick={() => setSelectedPodcast(null)}
//                         className="ml-4 text-gray-400 hover:text-white"
//                     >
//                         ✖
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default PodcastSection;
