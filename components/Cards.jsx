import React from "react";

export default function cards() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8   p-16 py-24">
        <div className="flex-1 min-h-48 p-4 rounded-xl bg-orange-500 text-white ">
          <h2 className="font-bold mb-4">Peer-to-Peer File Sharing</h2>
          <p>
            Students directly share files (e.g., lecture notes, assignments, projects) with their peers in a secure and decentralized manner. This is a peer-to-peer file transfer system that enables students to share resources without the need for a central server, ensuring privacy and reducing server load.
          </p>
        </div>

        <div className="flex-1 min-h-48 p-4 rounded-xl bg-blue-950 text-white ">
          <h2 className="font-bold mb-4">Course-Specific Resource Forums</h2>
          <p>
            Course-specific forums and hubs where students can upload, share, and access materials related to their classes. Students can organize resources by course, professor, semester, or topic, making it easier for students to find and collaborate on relevant materials.
          </p>
        </div>

        <div className="flex-1 min-h-48 p-4 rounded-xl  bg-orange-500  text-white ">
          <h2 className="font-bold mb-4">Study Group Collaboration</h2>
          <p>
            Enable students to form virtual study groups and collaborate on shared resources where students can receive feedback, ask questions, and discuss concepts with their study group members.
          </p>
        </div>
      </div>
    </>
  );
}
