import React, { useState } from 'react';
import { Plus, MoreVertical, X, Layers, ExternalLink, Trash2, Edit } from 'lucide-react';

const TechStack = () => {
  const [techStacks, setTechStacks] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingStack, setEditingStack] = useState(null);
  const [newStack, setNewStack] = useState({
    name: '',
    description: '',
    category: '',
    tools: [],
  });

  const availableTools = [
    {
      id: 1,
      name: 'Notion',
      category: 'Productivity',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//notion.png',
      url: 'https://notion.so',
    },
    {
      id: 2,
      name: 'Zoom',
      category: 'Communications',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//zoom.jpg',
      url: 'https://zoom.us',
    },
    {
      id: 3,
      name: 'Figma',
      category: 'Design',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//figma.png',
      url: 'https://figma.com',
    },
    {
      id: 4,
      name: 'Slack',
      category: 'Communications',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//slack.png',
      url: 'https://slack.com',
    },
    {
      id: 5,
      name: 'Later',
      category: 'Social Media Management',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//later.png',
      url: 'https://later.com',
    },
    {
      id: 6,
      name: 'Evernote',
      category: 'Productivity',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//evernote.png',
      url: 'https://evernote.com',
    },
  ];

  const categories = [
    'Development',
    'Design',
    'Marketing',
    'Sales',
    'Productivity',
    'Communication',
    'Project Management',
    'Content Creation',
  ];

  const handleCreateStack = () => {
    if (newStack.name && newStack.category && newStack.tools.length > 0) {
      const stack = {
        id: Date.now(),
        ...newStack,
        createdAt: new Date().toISOString(),
      };
      setTechStacks([...techStacks, stack]);
      setShowCreateModal(false);
      setNewStack({ name: '', description: '', category: '', tools: [] });
    } else {
      alert('Please fill in all required fields and select at least one tool.');
    }
  };

  const handleEditStack = () => {
    if (editingStack.name && editingStack.category && editingStack.tools.length > 0) {
      setTechStacks(
        techStacks.map((stack) => (stack.id === editingStack.id ? editingStack : stack))
      );
      setShowEditModal(false);
      setEditingStack(null);
    }
  };

  const handleDeleteStack = (stackId) => {
    if (window.confirm('Are you sure you want to delete this tech stack?')) {
      setTechStacks(techStacks.filter((stack) => stack.id !== stackId));
    }
  };

  const toggleToolSelection = (tool, isEditing = false) => {
    const currentStack = isEditing ? editingStack : newStack;
    const setCurrentStack = isEditing ? setEditingStack : setNewStack;

    const isSelected = currentStack.tools.find((t) => t.id === tool.id);

    if (isSelected) {
      setCurrentStack({
        ...currentStack,
        tools: currentStack.tools.filter((t) => t.id !== tool.id),
      });
    } else {
      setCurrentStack({
        ...currentStack,
        tools: [...currentStack.tools, tool],
      });
    }
  };

  const CreateStackModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
          <h2 className="text-2xl font-bold">Create Tech Stack</h2>
          <button
            onClick={() => setShowCreateModal(false)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Stack Name *</label>
            <input
              type="text"
              required
              value={newStack.name}
              onChange={(e) => setNewStack({ ...newStack, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="e.g., Content Creation Stack, Development Tools"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Category *</label>
            <select
              required
              value={newStack.category}
              onChange={(e) => setNewStack({ ...newStack, category: e.target.value })}
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

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Description</label>
            <textarea
              value={newStack.description}
              onChange={(e) => setNewStack({ ...newStack, description: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 h-24"
              placeholder="Describe the purpose of this tech stack..."
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">
              Select Tools * ({newStack.tools.length} selected)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-96 overflow-y-auto p-1">
              {availableTools.map((tool) => (
                <div
                  key={tool.id}
                  onClick={() => toggleToolSelection(tool)}
                  className={`p-3 border-2 rounded-lg cursor-pointer transition-all ${
                    newStack.tools.find((t) => t.id === tool.id)
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <img src={tool.icon} alt={tool.name} className="w-8 h-8 rounded" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm truncate">{tool.name}</h4>
                      <p className="text-xs text-gray-500 truncate">{tool.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setShowCreateModal(false)}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleCreateStack}
              className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors"
            >
              Create Stack
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const EditStackModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
          <h2 className="text-2xl font-bold">Edit Tech Stack</h2>
          <button
            onClick={() => {
              setShowEditModal(false);
              setEditingStack(null);
            }}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Stack Name *</label>
            <input
              type="text"
              required
              value={editingStack?.name || ''}
              onChange={(e) => setEditingStack({ ...editingStack, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Category *</label>
            <select
              required
              value={editingStack?.category || ''}
              onChange={(e) => setEditingStack({ ...editingStack, category: e.target.value })}
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

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">Description</label>
            <textarea
              value={editingStack?.description || ''}
              onChange={(e) => setEditingStack({ ...editingStack, description: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 h-24"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">
              Select Tools * ({editingStack?.tools.length || 0} selected)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-96 overflow-y-auto p-1">
              {availableTools.map((tool) => (
                <div
                  key={tool.id}
                  onClick={() => toggleToolSelection(tool, true)}
                  className={`p-3 border-2 rounded-lg cursor-pointer transition-all ${
                    editingStack?.tools.find((t) => t.id === tool.id)
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <img src={tool.icon} alt={tool.name} className="w-8 h-8 rounded" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm truncate">{tool.name}</h4>
                      <p className="text-xs text-gray-500 truncate">{tool.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => {
                setShowEditModal(false);
                setEditingStack(null);
              }}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleEditStack}
              className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const TechStackCard = ({ stack }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <div className="bg-white rounded-xl shadow-sm border-2 border-purple-600 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Layers size={24} className="text-purple-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{stack.name}</h3>
              <p className="text-sm text-gray-500">{stack.category}</p>
            </div>
          </div>
          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <MoreVertical size={20} className="text-gray-600" />
            </button>
            {menuOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} />
                <div className="absolute z-20 right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border">
                  <button
                    onClick={() => {
                      setEditingStack(stack);
                      setShowEditModal(true);
                      setMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-gray-700 rounded-t-lg"
                  >
                    <Edit size={16} /> Edit Stack
                  </button>
                  <button
                    onClick={() => {
                      handleDeleteStack(stack.id);
                      setMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-red-600 rounded-b-lg"
                  >
                    <Trash2 size={16} /> Delete Stack
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {stack.description && <p className="text-gray-600 mb-4 text-sm">{stack.description}</p>}

        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Tools ({stack.tools.length})</p>
          <div className="flex flex-wrap gap-2">
            {stack.tools.map((tool) => (
              <div
                key={tool.id}
                className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200"
              >
                <img src={tool.icon} alt={tool.name} className="w-5 h-5 rounded" />
                <span className="text-sm font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          {stack.tools.map((tool) => (
            <a
              key={tool.id}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-center rounded-full text-sm font-semibold transition-colors flex items-center justify-center gap-1"
            >
              <ExternalLink size={14} />
              {tool.name}
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      className="lg:h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden scrollbar-hide"
      style={{ scrollbarWidth: 'thin', scrollbarColor: '#9013FE #f1f1f1' }}
    >
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-hide::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .scrollbar-hide::-webkit-scrollbar-thumb {
          background: #9013FE;
          border-radius: 10px;
        }
        .scrollbar-hide::-webkit-scrollbar-thumb:hover {
          background: #7c0fe0;
        }
      `}</style>

      <p className="text-gray-600 mb-3">
        Curated Tech Stacks of tools tailored to specific tasks or projects.
      </p>

      {techStacks.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500 mb-4">You haven't created any Tech Stacks yet.</p>
          <button
            onClick={() => setShowCreateModal(true)}
            className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors inline-flex items-center gap-2"
          >
            <Plus size={20} />
            Create Your First Tech Stack
          </button>
        </div>
      ) : (
        <>
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-xl font-bold">Your Tech Stacks ({techStacks.length})</h2>
            <button
              onClick={() => setShowCreateModal(true)}
              className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors inline-flex items-center gap-2"
            >
              <Plus size={20} />
              Create New Stack
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
            {techStacks.map((stack) => (
              <TechStackCard key={stack.id} stack={stack} />
            ))}
          </div>
        </>
      )}

      {showCreateModal && <CreateStackModal />}
      {showEditModal && <EditStackModal />}
    </div>
  );
};

export default TechStack;
