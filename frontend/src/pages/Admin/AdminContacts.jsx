import React, { useEffect, useState } from "react";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          return;
        }

        const res = await fetch("https://stockweb-eibm.onrender.com/api/contact", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {

          throw new Error("Failed to fetch contact forms");
        }

        const data = await res.json();
        setContacts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) return <div className="text-center py-10">Loading contacts...</div>;
  if (error) return <div className="text-center py-10 text-red-600">{error}</div>;

  return (
    <div className="p-8 max-w-6xl mx-auto min-h-screen">
      <h1 className="text-3xl font-bold mb-6">📬 Contact Form Submissions</h1>

      <div className="grid gap-6">
        {contacts.map((contact) => (
          <div key={contact._id} className="bg-white p-6 rounded-xl shadow border border-gray-100">
            <div className="flex justify-between items-start mb-4 border-b pb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{contact.name}</h3>
                <p className="text-gray-500 text-sm">{contact.email} • {contact.number}</p>
              </div>
              <span className="text-sm text-gray-400">
                {new Date(contact.createdAt).toLocaleString()}
              </span>
            </div>
            <p className="text-gray-700 whitespace-pre-wrap">{contact.message}</p>
          </div>
        ))}
        {contacts.length === 0 && (
          <div className="text-center p-6 text-gray-500 bg-white rounded-xl shadow">
            No messages found.
          </div>
        )}
      </div>
    </div>
  );
}
