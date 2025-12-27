import React, { useState } from 'react';
import { Plus, Repeat, Star, MoreVertical, X, Search, ExternalLink } from 'lucide-react';

const Library = () => {
  const [tools, setTools] = useState([
    {
      id: 1,
      name: 'Zoom',
      category: 'Communications',
      description: 'Seamless video calls, meetings, and webinars for remote teams.',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//zoom.jpg',
      url: 'https://zoom.us',
    },
    {
      id: 2,
      name: 'Later',
      category: 'Social Media Management',
      description:
        'Social media scheduling platform. Plan, analyze, and publish your content efficiently.',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//later.png',
      url: 'https://later.com',
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedToolsForCompare, setSelectedToolsForCompare] = useState([]);
  const [reviewTool, setReviewTool] = useState(null);
  const [newTool, setNewTool] = useState({
    name: '',
    category: '',
    description: '',
    icon: '',
    url: '',
  });

  const categories = [
    'Productivity',
    'Communications',
    'Social Media Management',
    'Design',
    'Marketing',
    'Sales',
    'Development',
    'Finance',
    'HR',
    'Customer Support',
  ];

  const handleAddTool = (e) => {
    e.preventDefault();
    if (newTool.name && newTool.category && newTool.description) {
      const tool = {
        id: Date.now(),
        ...newTool,
        icon:
          newTool.icon || 'https://api.flowvahub.com/storage/v1/object/public/icons//notion.png',
      };
      setTools([...tools, tool]);
      setShowAddModal(false);
      setNewTool({ name: '', category: '', description: '', icon: '', url: '' });
    }
  };

  const handleRemoveTool = (toolId) => {
    if (window.confirm('Are you sure you want to remove this tool from your library?')) {
      setTools(tools.filter((tool) => tool.id !== toolId));
    }
  };

  const handleShare = (tool) => {
    if (navigator.share) {
      navigator
        .share({
          title: tool.name,
          text: tool.description,
          url: tool.url,
        })
        .catch(() => {
          // Fallback to copying link
          copyToClipboard(tool);
        });
    } else {
      copyToClipboard(tool);
    }
  };

  const copyToClipboard = (tool) => {
    const text = `Check out ${tool.name}: ${tool.description} - ${tool.url}`;
    navigator.clipboard.writeText(text).then(() => {
      alert('Link copied to clipboard!');
    });
  };

  const toggleToolForCompare = (tool) => {
    if (selectedToolsForCompare.find((t) => t.id === tool.id)) {
      setSelectedToolsForCompare(selectedToolsForCompare.filter((t) => t.id !== tool.id));
    } else if (selectedToolsForCompare.length < 3) {
      setSelectedToolsForCompare([...selectedToolsForCompare, tool]);
    } else {
      alert('You can only compare up to 3 tools at a time');
    }
  };

  const AddToolModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
          <h2 className="text-2xl font-bold">Add New Tool</h2>
          <button
            onClick={() => setShowAddModal(false)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleAddTool} className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Tool Name *</label>
            <input
              type="text"
              required
              value={newTool.name}
              onChange={(e) => setNewTool({ ...newTool, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="e.g., Notion, Slack, Figma"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Category *</label>
            <select
              required
              value={newTool.category}
              onChange={(e) => setNewTool({ ...newTool, category: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Description *</label>
            <textarea
              required
              value={newTool.description}
              onChange={(e) => setNewTool({ ...newTool, description: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 h-24"
              placeholder="Brief description of the tool..."
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Website URL</label>
            <input
              type="url"
              value={newTool.url}
              onChange={(e) => setNewTool({ ...newTool, url: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="https://example.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Icon URL (Optional)</label>
            <input
              type="url"
              value={newTool.icon}
              onChange={(e) => setNewTool({ ...newTool, icon: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="https://example.com/icon.png"
            />
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setShowAddModal(false)}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors"
            >
              Add Tool
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const CompareModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
          <h2 className="text-2xl font-bold">Compare Tools</h2>
          <button
            onClick={() => {
              setShowCompareModal(false);
              setSelectedToolsForCompare([]);
            }}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-6">
            Select 2-3 tools to compare (Selected: {selectedToolsForCompare.length})
          </p>

          {/* Tool Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {tools.map((tool) => (
              <div
                key={tool.id}
                onClick={() => toggleToolForCompare(tool)}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedToolsForCompare.find((t) => t.id === tool.id)
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <img src={tool.icon} alt={tool.name} className="w-10 h-10 rounded-lg" />
                  <div>
                    <h4 className="font-semibold">{tool.name}</h4>
                    <p className="text-sm text-gray-500">{tool.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          {selectedToolsForCompare.length >= 2 && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-4 text-left font-semibold border">Feature</th>
                    {selectedToolsForCompare.map((tool) => (
                      <th key={tool.id} className="p-4 text-left font-semibold border">
                        <div className="flex items-center gap-2">
                          <img src={tool.icon} alt={tool.name} className="w-8 h-8 rounded" />
                          {tool.name}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border font-semibold">Category</td>
                    {selectedToolsForCompare.map((tool) => (
                      <td key={tool.id} className="p-4 border">
                        {tool.category}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border font-semibold">Description</td>
                    {selectedToolsForCompare.map((tool) => (
                      <td key={tool.id} className="p-4 border">
                        {tool.description}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 border font-semibold">Website</td>
                    {selectedToolsForCompare.map((tool) => (
                      <td key={tool.id} className="p-4 border">
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:underline flex items-center gap-1"
                        >
                          Visit <ExternalLink size={16} />
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const ReviewModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
          <h2 className="text-2xl font-bold">Write a Review</h2>
          <button
            onClick={() => {
              setShowReviewModal(false);
              setReviewTool(null);
            }}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-6">Select a tool to review:</p>
          <div className="grid grid-cols-1 gap-3">
            {tools.map((tool) => (
              <div
                key={tool.id}
                onClick={() => setReviewTool(tool)}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  reviewTool?.id === tool.id
                    ? 'border-purple-600 bg-purple-50'
                    : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <img src={tool.icon} alt={tool.name} className="w-12 h-12 rounded-lg" />
                  <div>
                    <h4 className="font-semibold">{tool.name}</h4>
                    <p className="text-sm text-gray-500">{tool.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {reviewTool && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-semibold text-lg mb-4">Your Review for {reviewTool.name}</h3>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Star
                      key={rating}
                      size={32}
                      className="cursor-pointer text-purple-600 fill-purple-600"
                    />
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Your Review</label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 h-32"
                  placeholder="Share your experience with this tool..."
                />
              </div>
              <button
                onClick={() => {
                  alert('Review submitted!');
                  setShowReviewModal(false);
                  setReviewTool(null);
                }}
                className="w-full px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors"
              >
                Submit Review
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const ActionCard = ({ icon: Icon, title, description, onClick }) => (
    <div
      onClick={onClick}
      className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm cursor-pointer transition-all duration-300 ease-in-out flex-1 min-w-[200px] hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="bg-gray-100 p-4 rounded-full flex items-center justify-center">
        <div className="text-purple-600 text-lg">
          <Icon size={24} />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold m-0 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 m-0">{description}</p>
      </div>
    </div>
  );

  const ToolCard = ({ tool }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
      { label: 'Add to Stack', action: () => alert('Added to stack! (Feature coming soon)') },
      {
        label: 'Track Sub',
        action: () => alert('Subscription tracking added! (Feature coming soon)'),
      },
      { label: 'Share', action: () => handleShare(tool) },
      { label: 'Remove', action: () => handleRemoveTool(tool.id) },
    ];

    return (
      <div className="w-full min-h-[250px] bg-white rounded-xl shadow-sm transition-transform duration-200 cursor-pointer flex flex-col hover:-translate-y-1 border-2 border-purple-600">
        <div className="p-6 flex justify-between items-center">
          <div className="w-[50px] h-[50px] rounded-lg flex items-center justify-center">
            <img
              src={tool.icon}
              alt={tool.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="More options"
            >
              <MoreVertical size={20} className="text-gray-600" />
            </button>
            {menuOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
                <div className="flex flex-col absolute z-20 min-w-40 -right-4 mt-2 rounded-md bg-white shadow-lg border">
                  {menuItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        item.action();
                        setMenuOpen(false);
                      }}
                      className="bg-transparent border-none text-left w-full px-4 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-gray-100 transition-colors duration-150 first:rounded-t-md last:rounded-b-md"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="px-6 pb-6 flex-grow flex flex-col">
          <h3 className="font-bold mb-2 text-lg text-black">{tool.name}</h3>
          <div className="text-sm text-gray-500 mb-4">
            <span className="capitalize">{tool.category}</span>
          </div>
          <div className="text-base mb-6 flex-grow text-black">
            <p className="line-clamp-4">{tool.description}</p>
          </div>
          <div className="mt-auto">
            <button
              onClick={() => window.open(tool.url, '_blank')}
              className="w-full bg-purple-600 hover:bg-black h-12 text-white border-none rounded-full font-bold cursor-pointer transition-colors duration-200 flex items-center justify-center text-base"
            >
              Visit Tool →
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="lg:h-[calc(100vh-90px)] overflow-x-hidden scrollbar-hide"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <p className="mb-6 text-gray-600">Your personal library of tools.</p>

      {/* Action Cards */}
      <div className="flex flex-col md:flex-row gap-8 justify-between mt-4">
        <ActionCard
          icon={Plus}
          title="Add New Tool"
          description="Save a new tool to your library"
          onClick={() => setShowAddModal(true)}
        />
        <ActionCard
          icon={Repeat}
          title="Compare Tools"
          description="Evaluate tools side-by-side"
          onClick={() => setShowCompareModal(true)}
        />
        <ActionCard
          icon={Star}
          title="Tool Reviews"
          description="Share your experiences"
          onClick={() => setShowReviewModal(true)}
        />
      </div>

      {/* Tools Grid */}
      <div className="mt-10 pb-8">
        {tools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {tools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Your library is empty</h3>
            <p className="text-gray-500 text-center max-w-md mb-6">
              Start building your personal collection by adding tools from the discover page.
            </p>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors"
            >
              Add Your First Tool
            </button>
          </div>
        )}
      </div>

      {/* Modals */}
      {showAddModal && <AddToolModal />}
      {showCompareModal && <CompareModal />}
      {showReviewModal && <ReviewModal />}
    </div>
  );
};

export default Library;
