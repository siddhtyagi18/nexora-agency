import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiRefresh, HiArrowLeft, HiInbox } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchInquiries = async () => {
    setLoading(true);
    setError('');
    try {
      const { data } = await axios.get('/api/contact/getContactInfo');
      setInquiries(data.data || []);
    } catch (err) {
      setError('Failed to fetch inquiries. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchInquiries(); }, []);

  const formatDate = (d) => new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

  return (
    <div className="min-h-screen bg-dark-950 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link to="/" className="p-2 rounded-xl glass hover:bg-white/10 transition-colors"><HiArrowLeft className="w-5 h-5 text-white" /></Link>
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-bold text-white">Admin Dashboard</h1>
              <p className="text-sm text-dark-400">Manage contact inquiries</p>
            </div>
          </div>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={fetchInquiries} disabled={loading} className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-600 to-accent-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-all disabled:opacity-60">
            <HiRefresh className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />Refresh
          </motion.button>
        </div>

        <div className="glass p-2 mb-6">
          <div className="flex items-center gap-3 px-4 py-3">
            <HiInbox className="w-5 h-5 text-primary-400" />
            <span className="text-sm font-medium text-white">{inquiries.length} Total Inquiries</span>
          </div>
        </div>

        {error && <div className="glass p-6 text-center text-red-400 mb-6">{error}</div>}

        {loading ? (
          <div className="glass p-12 text-center">
            <svg className="animate-spin w-8 h-8 mx-auto text-primary-500 mb-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
            <p className="text-dark-400">Loading inquiries...</p>
          </div>
        ) : inquiries.length === 0 ? (
          <div className="glass p-12 text-center">
            <HiMail className="w-12 h-12 mx-auto text-dark-600 mb-4" />
            <p className="text-dark-400 text-lg">No inquiries yet</p>
            <p className="text-dark-500 text-sm mt-1">New messages will appear here.</p>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block glass overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left px-6 py-4 text-xs font-semibold text-dark-400 uppercase tracking-wider">Name</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-dark-400 uppercase tracking-wider">Email</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-dark-400 uppercase tracking-wider">Message</th>
                    <th className="text-left px-6 py-4 text-xs font-semibold text-dark-400 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {inquiries.map((inq, i) => (
                    <motion.tr key={inq._id || i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-4 text-sm text-white font-medium">{inq.fullName}</td>
                      <td className="px-6 py-4 text-sm text-primary-400">{inq.email}</td>
                      <td className="px-6 py-4 text-sm text-dark-300 max-w-xs truncate">{inq.description}</td>
                      <td className="px-6 py-4 text-xs text-dark-500 whitespace-nowrap">{formatDate(inq.createdAt)}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {inquiries.map((inq, i) => (
                <motion.div key={inq._id || i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="glass p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold">{inq.fullName}</span>
                    <span className="text-xs text-dark-500">{formatDate(inq.createdAt)}</span>
                  </div>
                  <p className="text-sm text-primary-400">{inq.email}</p>
                  <p className="text-sm text-dark-300 leading-relaxed">{inq.description}</p>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
