import {
  Home,
  Compass,
  Box,
  Layers,
  CreditCard,
  Gem,
  Settings,
  Bell,
  Menu,
  ArrowRight,
  ExternalLink,
  Plus,
  Star,
} from 'lucide-react';

const StatCard = ({ icon: Icon, title, count, description, link, color }) => (
  <a
    href={link}
    className="bg-white text-start rounded-xl p-4 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-purple-200 border border-gray-200 transition-all duration-300"
  >
    <div
      className={`w-10 h-10 rounded-full flex justify-center items-center mb-4 text-base ${color}`}
    >
      <Icon size={20} />
    </div>
    <h3 className="font-semibold mb-2 text-sm flex justify-between items-center">
      {title}
      <span className="text-2xl text-purple-600">{count}</span>
    </h3>
    <p className="text-gray-500 text-xs mb-4">{description}</p>
    <div className="text-purple-600 flex items-center text-xs">
      View {title.toLowerCase()}
      <ArrowRight
        size={14}
        className="ml-2 group-hover:translate-x-1 transition-all duration-300"
      />
    </div>
  </a>
);

// Empty State Component
const EmptyState = ({
  icon: Icon,
  title,
  description,
  buttonText,
  buttonIcon: ButtonIcon,
  buttonColor,
  onButtonClick,
}) => (
  <div className="bg-white rounded-xl p-8 text-center mb-6 shadow-sm border border-gray-200">
    <div
      className={`w-20 h-20 rounded-full ${buttonColor} flex justify-center items-center text-3xl mx-auto mb-6`}
    >
      <Icon size={40} />
    </div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-gray-500 mb-6 max-w-md mx-auto">{description}</p>
    <button
      onClick={onButtonClick}
      className={`w-full md:max-w-sm h-12 rounded-full font-bold text-sm md:text-base inline-flex items-center justify-center border-none text-center transition-all duration-300 text-white ${
        buttonColor.includes('purple')
          ? 'bg-purple-600 hover:bg-purple-700'
          : 'bg-red-400 hover:bg-red-500'
      } hover:-translate-y-0.5 hover:shadow-lg`}
    >
      <ButtonIcon size={18} className="mr-2" />
      {buttonText}
    </button>
  </div>
);

const ToolCard = ({ name, icon, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center p-3 rounded-lg bg-gray-50 transition-all duration-300 border border-gray-200 hover:bg-purple-50 relative hover:border-purple-200 hover:-translate-y-0.5"
  >
    <div className="w-9 h-9 rounded-lg flex items-center justify-center mr-3 bg-red-50">
      <img src={icon} alt={name} className="w-full h-full" />
    </div>
    <div className="text-sm font-semibold">{name}</div>
    <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-purple-100 border-none w-6 h-6 rounded-md flex items-center justify-center cursor-pointer opacity-0 transition-all duration-300 text-purple-600 group-hover:opacity-100">
      <ExternalLink size={14} />
    </button>
    <div className="bg-black text-white px-2 py-0.5 group-hover:opacity-100 absolute left-0 right-0 m-auto w-fit -bottom-4 text-xs rounded opacity-0 pointer-events-none">
      Open Tool
    </div>
  </a>
);

const HomePage = () => {
  const topTools = [
    {
      name: 'Reclaim',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//reclaim%20(1).png',
      url: 'https://go.reclaim.ai/ur9i6g5eznps',
    },
    {
      name: 'Campaigner',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//campaigner.jpeg',
      url: 'https://pstk.campaigner.com/cvanplia4oc2',
    },
    {
      name: 'Keeper',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//Keepersecurity.jpg',
      url: 'https://keepersecurity.partnerlinks.io/bdj2jco6dsy8',
    },
    {
      name: 'Clickup',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//clickup.jpeg',
      url: 'https://try.web.clickup.com/ymxs0i4on42o',
    },
    {
      name: 'Brevo',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//brevo.png',
      url: 'https://get.brevo.com/9vml1qjuxigb',
    },
    {
      name: 'Fiverr',
      icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//Fiverr.png',
      url: 'https://fiverr.partnerlinks.io/ofssm6dzdmhd',
    },
  ];

  const recentTool = {
    name: 'Later',
    icon: 'https://api.flowvahub.com/storage/v1/object/public/icons//later.png',
    url: 'https://try.later.com/9p80zkur832j',
  };

  return (
    <>
      {/* Banner */}
      <div className="mt-2 mb-5">
        <div className="bg-linear-to-r from-purple-100 to-purple-50 rounded-xl p-6 border border-purple-200">
          <div className="flex items-start gap-4">
            <img src="/assets/banner-img-BG9D5FJ5.png" alt="announcement" className="w-16 h-16" />
            <div>
              <h3 className="font-bold text-lg mb-2">Big News: We're Becoming Bravoo! 🎉</h3>
              <p className="text-sm text-gray-700">
                Bravoo a platform designed to make learning fun, simple, and truly rewarding. With
                Bravoo, you'll complete quick, engaging missions that help you build real digital
                skills while earning coins, prizes, gadgets, and more. Explore what's coming on our
                brand-new website:{' '}
                <a
                  href="https://www.joinbravoo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-purple-600"
                >
                  www.joinbravoo.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Stats Grid */}
      <div className="grid gap-5 mb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={Box}
          title="My Tools"
          count={1}
          description="All tools in your personal library"
          link="/dashboard/library"
          color="bg-purple-100 text-purple-600"
        />
        <StatCard
          icon={Layers}
          title="My Tech Stack"
          count={0}
          description="Your curated tool collections"
          link="/dashboard/tech-stack"
          color="bg-red-50 text-red-500"
        />
        <StatCard
          icon={CreditCard}
          title="Subscriptions"
          count={0}
          description="Your tool subscriptions"
          link="/dashboard/subscriptions"
          color="bg-green-50 text-green-500"
        />
        <StatCard
          icon={Gem}
          title="Rewards"
          count={0}
          description="Your available reward points"
          link="/dashboard/earn-rewards"
          color="bg-purple-100 text-purple-600"
        />
      </div>
      {/* Top Picks */}
      <div className="bg-white rounded-xl p-6 mb-6 shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-semibold flex items-center text-lg">
            <Box size={20} className="mr-3 text-purple-600" />
            Top Picks for You
          </h2>
          <a
            href="/dashboard/discover"
            className="text-purple-600 text-sm font-medium hover:underline"
          >
            View All
          </a>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-3">
          {topTools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
      </div>

      <EmptyState
        icon={Layers}
        title="No Tech Stacks Created"
        description="Create your first tech stack by combining tools from your library for specific projects or workflows."
        buttonText="Create Tech Stack"
        buttonIcon={Plus}
        buttonColor="bg-purple-100 text-purple-600"
        onButtonClick={() => console.log('Create tech stack')}
      />
      <div className="bg-white rounded-xl p-6 mb-6 shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-semibold flex items-center text-lg">
            <Star size={20} className="mr-3 text-purple-600" />
            Recent Tools
          </h2>
          <a
            href="/dashboard/library"
            className="text-purple-600 text-sm font-medium hover:underline"
          >
            View All
          </a>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-3">
          <ToolCard {...recentTool} />
        </div>
      </div>
      <EmptyState
        icon={CreditCard}
        title="No Subscriptions Added"
        description="Add your tool subscriptions to manage renewals, track spending, and discover potential savings."
        buttonText="Add Subscription"
        buttonIcon={Plus}
        buttonColor="bg-purple-100 text-purple-600"
        onButtonClick={() => console.log('Add subscription')}
      />
      <EmptyState
        icon={Gem}
        title="Earn Your First Reward"
        description="Start earning points by adding tools, writing reviews, and sharing your stacks. Redeem points for discounts and perks."
        buttonText="Explore Rewards"
        buttonIcon={Gem}
        buttonColor="bg-red-50 text-red-400"
        onButtonClick={() => console.log('Explore rewards')}
      />
    </>
  );
};

export default HomePage;
