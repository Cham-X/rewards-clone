import React, { useState, useMemo } from 'react';
import { Search, MoreVertical } from 'lucide-react';

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedFilter, setSelectedFilter] = useState('Recommended');

  const categories = [
    'All Categories',
    'Productivity',
    'Design',
    'Marketing',
    'Sales',
    'Development',
    'Finance',
    'HR',
    'Customer Support',
    'Collaborations',
    'Content Writing',
    'Communications',
    'AI Tools',
  ];

  const filters = ['Recommended', 'Featured', 'Trending'];

  const allTools = [
    {
      name: 'Notion',
      category: ['Productivity'],
      description:
        'Create, organize, and collaborate on notes, tasks, and projects with a fully customizable workspace.',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//notion.png',
      url: '#',
      featured: true,
      trending: false,
    },
    {
      name: 'Guidde',
      category: ['Productivity'],
      description:
        'Video documentation platform. Create and share video guides for your product or service.',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//guidde.jpeg',
      url: '#',
      featured: false,
      trending: true,
    },
    {
      name: 'Evernote',
      category: ['Productivity'],
      description:
        'Take notes, manage projects, and collaborate with your team in a flexible, all-in-one workspace.',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//evernote.png',
      url: '#',
      featured: true,
      trending: false,
    },
    {
      name: 'Jotform',
      category: ['Productivity'],
      description:
        'A powerful project management tool that helps teams stay on track and complete tasks efficiently',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//jotform%20(1).png',
      url: '#',
      featured: false,
      trending: true,
    },
    {
      name: 'Remnote',
      category: ['Productivity'],
      description:
        'Take notes, manage projects, and collaborate with your team in a flexible, all-in-one workspace.',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//remnote.png',
      url: '#',
      featured: true,
      trending: false,
    },
    {
      name: 'SaneBox',
      category: ['Productivity'],
      description:
        'The smart inbox assistant that filters what matters, so you focus on what counts',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//sanebox.png',
      url: '#',
      featured: false,
      trending: false,
    },
    {
      name: 'Craft',
      category: ['Productivity'],
      description:
        'Transform meetings with AI-driven summaries and insights. Boost productivity effortlessly.',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//craft.png',
      url: '#',
      featured: true,
      trending: true,
    },
    {
      name: 'Hoop',
      category: ['Productivity'],
      description:
        'Hoop connects to tools like Google Meet, Zoom, and Slack and uses AI to grab all your tasks.',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//hoop.png',
      url: '#',
      featured: false,
      trending: true,
    },
    {
      name: 'Fellow',
      category: ['Collaborations', 'Productivity'],
      description: 'Meeting productivity tool for teams.',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//fello.png',
      url: '#',
      featured: true,
      trending: false,
    },
    {
      name: 'Quillbot',
      category: ['Content Writing', 'Productivity'],
      description:
        'AI-powered writing platform. Paraphrase, grammar check, and enhance your writing.',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//Quillbot.jpeg',
      url: '#',
      featured: false,
      trending: true,
    },
    {
      name: 'Canary Mail',
      category: ['Productivity', 'Communications'],
      description:
        'Discover Canary Mail, the best email client with AI-powered features and integrated calendar.',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//canary.jpeg',
      url: '#',
      featured: true,
      trending: false,
    },
    {
      name: 'Todoist',
      category: ['Productivity'],
      description:
        "Todoist is the world's favorite task manager and to-do list app. Finally become focused, organized and calm.",
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//todoist.png',
      url: '#',
      featured: false,
      trending: true,
    },
  ];

  // Filter and search logic
  const filteredTools = useMemo(() => {
    let results = [...allTools];

    // Filter by category
    if (selectedCategory !== 'All Categories') {
      results = results.filter((tool) => tool.category.includes(selectedCategory));
    }

    // Filter by type (Featured/Trending)
    if (selectedFilter === 'Featured') {
      results = results.filter((tool) => tool.featured);
    } else if (selectedFilter === 'Trending') {
      results = results.filter((tool) => tool.trending);
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (tool) =>
          tool.name.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          tool.category.some((cat) => cat.toLowerCase().includes(query))
      );
    }

    return results;
  }, [searchQuery, selectedCategory, selectedFilter]);

  const ToolCard = ({ tool }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <div className="w-full min-h-62.5 bg-white rounded-xl shadow-sm transition-transform duration-200 cursor-pointer flex flex-col hover:-translate-y-1 border-2 border-purple-600">
        {/* Header */}
        <div className="p-6 flex justify-between items-center">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center">
            <img
              loading="lazy"
              src={tool.icon}
              alt={tool.name}
              className="w-full h-full object-cover rounded-lg"
            />
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
                <div className="absolute z-20 min-w-40 -right-4 mt-2 rounded-md bg-white shadow-lg border">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setMenuOpen(false);
                      alert('Added to library!');
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-purple-600 hover:bg-gray-100 rounded transition-colors"
                  >
                    Add to Library
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 grow flex flex-col">
          <h3 className="font-bold mb-2 text-lg text-black">{tool.name}</h3>
          <div className="text-sm text-gray-500 mb-4">
            {tool.category.map((cat, idx) => (
              <span key={idx} className="capitalize">
                {cat}
                {idx < tool.category.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
          <div className="text-base mb-6 grow text-black">
            <p className="line-clamp-4">{tool.description}</p>
          </div>
          <div className="mt-auto">
            <button
              onClick={() => window.open(tool.url, '_blank')}
              className="w-full h-12 text-white border-none rounded-full font-bold cursor-pointer transition-all duration-200 flex items-center justify-center text-base bg-purple-600 hover:bg-purple-700"
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
      className="overflow-y-auto pb-3 mt-3 h-[calc(100vh-94px)] scrollbar-hide"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Search Section */}
      <div className="mb-4 md:mb-6 px-2">
        <div className="w-full flex flex-col items-center justify-center my-2 sm:my-3 md:my-4 sm:px-2 px-2">
          <div className="w-full h-fit py-3 sm:py-4 md:py-6 px-4 sm:px-6 md:px-8 rounded-2xl flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl pt-2 font-bold text-black mb-2 sm:mb-3 md:mb-4 text-center">
              Find The Right Tools
            </h2>
            <div className="relative w-full max-w-md sm:max-w-md md:max-w-lg lg:max-w-2xl">
              <input
                type="text"
                placeholder="Search tools or categories..."
                className="w-full h-11 bg-gray-200 placeholder:text-black/50 rounded-full py-2 sm:py-4 px-4 sm:px-6 text-base sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute lg:right-0.5 right-1 top-1/2 transform -translate-y-1/2 cursor-pointer">
                <div className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <Search className="text-white" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="sticky top-0 z-10 bg-gray-50 px-2 py-3 lg:py-6">
        {/* Mobile Layout */}
        <div className="flex items-center flex-col md:hidden gap-5">
          <div className="w-55 self-start">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:bg-[#9013FE33] "
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div
            className="overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="inline-flex items-center space-x-1 md:space-x-3 lg:space-x-6">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3 py-1 md:px-4 md:py-2 h-10 rounded-full text-base transition-colors duration-200 whitespace-nowrap ${
                    selectedFilter === filter
                      ? 'bg-[#9013FE33]  font-semibold'
                      : 'hover:bg-[#9013FE33]  font-medium'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center">
          <div className="w-55 self-start">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full h-10 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="ml-16">
            <div className="inline-flex items-center space-x-1 md:space-x-3 lg:space-x-6">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3 py-1 md:px-4 md:py-2 h-10 rounded-full text-base transition-colors duration-200 whitespace-nowrap ${
                    selectedFilter === filter
                      ? 'bg-purple-100 font-semibold'
                      : 'hover:bg-purple-50 font-medium'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="px-2 pb-3">
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {filteredTools.map((tool, index) => (
              <ToolCard key={index} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <p className=" text-center max-w-md">No Result Found </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Discover;
