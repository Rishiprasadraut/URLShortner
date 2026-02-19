import React, { useState, useEffect } from "react";
import api from "../services/api";

const Formurl = () => {
  const [url, setUrl] = useState("");
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUrls = async () => {
    try {
      const res = await api.get("/");
      console.log("Fetched URLs:", res.data);
      setUrls(res.data.urls || []);
    } catch (err) {
      console.error("Error fetching URLs:", err.response?.data || err.message);
      setError(err.response?.data?.error || "Failed to fetch URLs");
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!url) return;

    setError("");
    setLoading(true);

    try {
      await api.post("/url", { url });
      setUrl("");
      fetchUrls();
    } catch (err) {
      setError(err.response?.data?.error || "Failed to create short URL");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-6">
      {error && (
        <p className="text-red-500 text-sm mb-3">{error}</p>
      )}

      {/* FORM */}
      <form onSubmit={submit} className="flex gap-3 mb-6">
        <input
          className="flex-1 border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "..." : "Shorten"}
        </button>
      </form>

      {/* TABLE */}
      {urls.length > 0 ? (
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-left">
              <th>#</th>
              <th>Short ID</th>
              <th>Original URL</th>
              <th>Clicks</th>
            </tr>
          </thead>

          <tbody>
            {urls.map((item, i) => (
              <tr key={item._id} className="border-b">
                <td>{i + 1}</td>

                <td className="text-blue-600">
                  <a
                    href={`http://localhost:4001/url/${item.shortId}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.shortId}
                  </a>
                </td>

                <td className="truncate max-w-xs">
                  {item.redirectUrl}
                </td>

                <td>{item.visitHistory.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center py-8 text-gray-500">
          <p>No URLs yet. Create your first short URL above!</p>
        </div>
      )}
    </div>
  );
};

export default Formurl;
