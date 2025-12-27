import React, { useState } from 'react';
import {
  Plus,
  Bell,
  AlarmClockCheck,
  Mail,
  Menu,
  X,
  Calendar,
  DollarSign,
  Trash2,
  Edit,
} from 'lucide-react';

const Subscription = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showRemindersModal, setShowRemindersModal] = useState(false);
  const [newSubscription, setNewSubscription] = useState({
    name: '',
    cost: '',
    billingCycle: 'monthly',
    nextBillingDate: '',
    category: '',
    icon: '',
  });

  const popularTools = [
    {
      name: 'Instapage',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//instapage.jpeg',
    },
    {
      name: 'Moosend',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//Moosend.png',
    },
    {
      name: 'Hootsuite',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//hootsuite.png',
    },
    {
      name: 'SendGrid',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//sendgrid.png',
    },
    { name: 'Warmy', icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//warmy.jpeg' },
    { name: 'Later', icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//later.png' },
    {
      name: 'Monday.com',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//monday.jpeg',
    },
    {
      name: 'Notion',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//notion.png',
    },
    {
      name: 'Guidde',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//guidde.jpeg',
    },
  ];

  const billingCycles = ['monthly', 'yearly', 'quarterly', 'weekly'];
  const categories = [
    'Productivity',
    'Marketing',
    'Design',
    'Development',
    'Communication',
    'Analytics',
    'Other',
  ];

  const handleAddSubscription = () => {
    if (newSubscription.name && newSubscription.cost && newSubscription.nextBillingDate) {
      const subscription = {
        id: Date.now(),
        ...newSubscription,
        addedDate: new Date().toISOString(),
      };
      setSubscriptions([...subscriptions, subscription]);
      setShowAddModal(false);
      setNewSubscription({
        name: '',
        cost: '',
        billingCycle: 'monthly',
        nextBillingDate: '',
        category: '',
        icon: '',
      });
    } else {
      alert('Please fill in all required fields');
    }
  };

  const handleQuickAdd = (tool) => {
    setNewSubscription({
      ...newSubscription,
      name: tool.name,
      icon: tool.icon,
    });
    setShowAddModal(true);
  };

  const handleDeleteSubscription = (id) => {
    if (window.confirm('Are you sure you want to delete this subscription?')) {
      setSubscriptions(subscriptions.filter((sub) => sub.id !== id));
    }
  };

  const calculateTotalCost = () => {
    return subscriptions
      .reduce((total, sub) => {
        const cost = parseFloat(sub.cost);
        if (sub.billingCycle === 'monthly') return total + cost;
        if (sub.billingCycle === 'yearly') return total + cost / 12;
        if (sub.billingCycle === 'quarterly') return total + cost / 3;
        if (sub.billingCycle === 'weekly') return total + cost * 4;
        return total;
      }, 0)
      .toFixed(2);
  };

  const AddSubscriptionModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
          <h2 className="text-2xl font-bold">Add Subscription</h2>
          <button
            onClick={() => setShowAddModal(false)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Service Name *</label>
            <input
              type="text"
              required
              value={newSubscription.name}
              onChange={(e) => setNewSubscription({ ...newSubscription, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="e.g., Netflix, Spotify, Adobe"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Cost *</label>
              <div className="relative">
                <DollarSign size={20} className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="number"
                  step="0.01"
                  required
                  value={newSubscription.cost}
                  onChange={(e) => setNewSubscription({ ...newSubscription, cost: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="9.99"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Billing Cycle *</label>
              <select
                value={newSubscription.billingCycle}
                onChange={(e) =>
                  setNewSubscription({ ...newSubscription, billingCycle: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                {billingCycles.map((cycle) => (
                  <option key={cycle} value={cycle}>
                    {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Next Billing Date *</label>
            <input
              type="date"
              required
              value={newSubscription.nextBillingDate}
              onChange={(e) =>
                setNewSubscription({ ...newSubscription, nextBillingDate: e.target.value })
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Category</label>
            <select
              value={newSubscription.category}
              onChange={(e) => setNewSubscription({ ...newSubscription, category: e.target.value })}
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
            <label className="block text-sm font-semibold mb-2">Icon URL (Optional)</label>
            <input
              type="url"
              value={newSubscription.icon}
              onChange={(e) => setNewSubscription({ ...newSubscription, icon: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="https://example.com/icon.png"
            />
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setShowAddModal(false)}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleAddSubscription}
              className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors"
            >
              Add Subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const RemindersModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
          <h2 className="text-2xl font-bold">Manage Reminders</h2>
          <button
            onClick={() => setShowRemindersModal(false)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-6">
            Set up email reminders for your subscriptions before they renew.
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-semibold">7 days before renewal</h4>
                <p className="text-sm text-gray-500">Get notified a week before</p>
              </div>
              <input type="checkbox" className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-semibold">3 days before renewal</h4>
                <p className="text-sm text-gray-500">Last reminder before billing</p>
              </div>
              <input type="checkbox" className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-semibold">1 day before renewal</h4>
                <p className="text-sm text-gray-500">Final reminder</p>
              </div>
              <input type="checkbox" className="w-5 h-5 text-purple-600" />
            </div>
          </div>

          <button
            onClick={() => {
              alert('Reminder settings saved!');
              setShowRemindersModal(false);
            }}
            className="w-full mt-6 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );

  const SubscriptionCard = ({ subscription }) => {
    const daysUntilRenewal = Math.ceil(
      (new Date(subscription.nextBillingDate) - new Date()) / (1000 * 60 * 60 * 24)
    );

    return (
      <div className="bg-white rounded-xl border-2 border-purple-600 p-6 shadow-sm hover:shadow-lg transition-all">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            {subscription.icon ? (
              <img
                src={subscription.icon}
                alt={subscription.name}
                className="w-12 h-12 rounded-lg"
              />
            ) : (
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl">
                {subscription.name.charAt(0)}
              </div>
            )}
            <div>
              <h3 className="font-bold text-lg">{subscription.name}</h3>
              {subscription.category && (
                <p className="text-sm text-gray-500">{subscription.category}</p>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Edit size={18} className="text-gray-600" />
            </button>
            <button
              onClick={() => handleDeleteSubscription(subscription.id)}
              className="p-2 hover:bg-red-50 rounded-lg"
            >
              <Trash2 size={18} className="text-red-600" />
            </button>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Cost:</span>
            <span className="font-bold text-lg text-purple-600">${subscription.cost}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Billing Cycle:</span>
            <span className="font-semibold capitalize">{subscription.billingCycle}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Next Bill:</span>
            <span className="font-semibold">
              {new Date(subscription.nextBillingDate).toLocaleDateString()}
            </span>
          </div>
        </div>

        <div
          className={`px-4 py-2 rounded-lg text-center ${
            daysUntilRenewal <= 3
              ? 'bg-red-50 text-red-700'
              : daysUntilRenewal <= 7
              ? 'bg-yellow-50 text-yellow-700'
              : 'bg-green-50 text-green-700'
          }`}
        >
          <span className="text-sm font-semibold">
            {daysUntilRenewal <= 0 ? 'Renews today!' : `Renews in ${daysUntilRenewal} days`}
          </span>
        </div>
      </div>
    );
  };

  return (
    // <main className="w-full bg-gray-50 px-4 lg:px-8 lg:pt-8 min-h-screen grow md:overflow-y-auto box-border">
    <div className="relative bg-gray-50">
      {/* Header */}
      {/* <div className="sticky top-0 z-10 bg-gray-50 pb-2 flex py-2 pt-3 lg:pt-0 lg:py-0">
          <div className="bg-gray-50 flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
              <button className="lg:hidden">
                <Menu size={28} />
              </button>
              <h1 className="text-xl md:text-2xl font-medium">Subscriptions</h1>
            </div>
            <div className="flex gap-3 items-center">
              <button
                onClick={() => setShowAddModal(true)}
                className="h-10 w-10 md:w-auto md:px-4 md:h-9 flex items-center justify-center gap-2 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors"
              >
                <Plus size={20} />
                <span className="hidden md:block">Add Subscription</span>
              </button>
              <button
                onClick={() => setShowRemindersModal(true)}
                className="px-4 py-2 border border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors hidden md:flex items-center gap-2"
              >
                <AlarmClockCheck size={16} />
                Manage Reminders
              </button>
              <button
                onClick={() => setShowRemindersModal(true)}
                className="p-2 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors md:hidden"
              >
                <AlarmClockCheck size={20} />
              </button>
              <div className="relative">
                <button className="p-2 hover:text-purple-600 transition-colors">
                  <Bell size={24} />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    2
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div> */}

      {/* Content */}
      <div
        className="lg:h-[calc(100vh-90px)] overflow-y-auto scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>

        {subscriptions.length === 0 ? (
          <div className="mx-auto p-2">
            {/* Empty State */}
            <div className="bg-white text-center mb-8 shadow-sm rounded-xl p-12">
              <div className="text-6xl text-purple-600 mb-6">
                <Calendar size={80} className="mx-auto" />
              </div>
              <h5 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                No subscriptions yet
              </h5>
              <p className="text-gray-500 text-sm md:text-lg max-w-md mx-auto mb-8 leading-relaxed">
                You haven't added any subscriptions yet. Track your recurring payments and manage
                all your subscriptions in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => setShowAddModal(true)}
                  className="px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2"
                >
                  <Plus size={20} />
                  Add Subscription
                </button>
                <button className="px-6 py-3 border border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors flex items-center gap-2">
                  <Mail size={20} />
                  Import via Email
                </button>
              </div>
            </div>

            {/* Popular Tools */}
            <div className="bg-white shadow-sm rounded-xl p-6">
              <p className="text-xl font-bold text-gray-800 my-6 text-center">
                Popular Tools to Get Started
              </p>
              <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(150px,1fr))]">
                {popularTools.map((tool, index) => (
                  <div
                    key={index}
                    onClick={() => handleQuickAdd(tool)}
                    className="flex flex-col items-center p-6 border border-gray-200 rounded-lg cursor-pointer transition-all duration-200 hover:border-purple-600 hover:-translate-y-1 hover:shadow-md group"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110">
                      <img src={tool.icon} alt={tool.name} className="w-8 h-8 rounded shrink-0" />
                    </div>
                    <span className="font-semibold text-gray-800 text-center text-sm leading-tight">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-gray-600 text-sm font-semibold mb-2">Total Monthly Cost</h3>
                <p className="text-3xl font-bold text-purple-600">${calculateTotalCost()}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-gray-600 text-sm font-semibold mb-2">Active Subscriptions</h3>
                <p className="text-3xl font-bold text-gray-800">{subscriptions.length}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-gray-600 text-sm font-semibold mb-2">Upcoming Renewals</h3>
                <p className="text-3xl font-bold text-orange-600">
                  {
                    subscriptions.filter((sub) => {
                      const days = Math.ceil(
                        (new Date(sub.nextBillingDate) - new Date()) / (1000 * 60 * 60 * 24)
                      );
                      return days <= 7;
                    }).length
                  }
                </p>
              </div>
            </div>

            {/* Subscriptions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
              {subscriptions.map((sub) => (
                <SubscriptionCard key={sub.id} subscription={sub} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>

    //   {showAddModal && <AddSubscriptionModal />}
    //   {showRemindersModal && <RemindersModal />}
    // </main>
  );
};

export default Subscription;
