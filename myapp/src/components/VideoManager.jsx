import { useState } from "react";

function VideoManager({ onVideoChange }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    video: null,
  });
  const [showModal, setShowModal] = useState(false);

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("video", formData.video);

    try {
      const response = await fetch("http://127.0.0.1:3000/api/videos", {
        method: "POST",
        body: data,
      });
      setFormData({ title: "", description: "", video: null });
      onVideoChange();
      setShowModal(false); // Close modal after upload
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      {/* Modal Trigger Button */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105"
      >
        Upload Short +
      </button>

      {/* Modal Overlay */}
      {showModal && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-blur-lg flex items-center justify-center z-[999]"
          onClick={() => setShowModal(false)}
        >
          {/* Modal Content */}
          <div
            className="bg-white rounded-lg p-6 w-full max-w-lg mx-4 shadow-xl transform transition-all z-[999]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Upload New Short
              </h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleFileUpload} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  placeholder="Enter title"
                  className="w-full text-black p-2 border rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Description</label>
                <textarea
                  placeholder="Enter description"
                  className="w-full text-black p-2 border rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows="3"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Video File</label>
                <input
                  type="file"
                  accept="video/*"
                  className="w-full p-2 border rounded"
                  onChange={(e) =>
                    setFormData({ ...formData, video: e.target.files[0] })
                  }
                  required
                />
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors"
                >
                  Upload Video
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoManager;
