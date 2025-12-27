import React, { useState } from 'react';
import { Award, Calendar, Zap, Star, Share2, Users, Copy, Gift, UserPlus } from 'lucide-react';

const RewardsHub = () => {
  const [activeTab, setActiveTab] = useState('earn');
  const [points, setPoints] = useState(0);
  const [streak, setStreak] = useState(0);
  const [referrals, setReferrals] = useState(0);
  const [pointsFromReferrals, setPointsFromReferrals] = useState(0);

  const referralLink = 'https://app.flowvahub.com/signup/?ref=hjjjj8729';

  const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const currentDay = 5; // Saturday

  const handleClaimDaily = () => {
    setPoints(points + 5);
    setStreak(streak + 1);
    alert('🎉 You earned 5 points!');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    alert('✅ Referral link copied to clipboard!');
  };

  const handleShareStack = () => {
    alert('Share your tech stack to earn 25 points!');
  };

  const handleSignUp = () => {
    window.open('https://go.reclaim.ai/ur9i6g5eznps', '_blank');
  };

  const handleClaimSpotlight = () => {
    setPoints(points + 50);
    alert('🎁 You claimed 50 points!');
  };

  const calculateProgress = () => {
    const targetPoints = 5000;
    return (points / targetPoints) * 100;
  };

  const getProgressMessage = () => {
    if (points === 0) return '🚀 Just getting started — keep earning points!';
    if (points < 1000) return '💪 Great start! Keep going!';
    if (points < 2500) return "🔥 You're on fire! Halfway there!";
    if (points < 5000) return "⭐ Almost there! Don't stop now!";
    return '🎉 Congratulations! You earned a reward!';
  };

  const shareOnSocial = (platform) => {
    const shareText = `Join me on Flowva and earn rewards! ${referralLink}`;
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        referralLink
      )}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText)}`,
    };
    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div>
      <p className="text-gray-600 mb-4">
        Earn points, unlock rewards, and celebrate your progress!
      </p>

      <div
        className="lg:h-[calc(100vh-110px)] overflow-x-hidden scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Tabs */}
        <div className="mt-5 border-b border-gray-200">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('earn')}
              className={`pb-3 px-1 font-semibold transition-colors relative ${
                activeTab === 'earn' ? 'text-purple-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Earn Points
              {activeTab === 'earn' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('redeem')}
              className={`pb-3 px-1 font-semibold transition-colors relative ${
                activeTab === 'redeem' ? 'text-purple-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Redeem Rewards
              {activeTab === 'redeem' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600" />
              )}
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'earn' ? (
          <div className="py-6">
            {/* Your Rewards Journey */}
            <h2 className="text-lg md:text-2xl my-3 text-black border-l-4 border-purple-600 pl-3 font-semibold">
              Your Rewards Journey
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Points Balance Card */}
              <div className="shadow-sm rounded-2xl hover:-translate-y-1 hover:shadow-lg border border-gray-200 overflow-hidden transition-all duration-200">
                <div className="p-4 bg-indigo-50 border-b border-gray-200">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
                    <Award className="h-5 w-5 text-purple-600" />
                    Points Balance
                  </h3>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="font-extrabold text-4xl text-purple-600">{points}</div>
                    <div className="w-24 h-24">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="40" fill="#FFD700" />
                        <circle cx="50" cy="50" r="30" fill="#FFA500" />
                        <path
                          d="M50 25 L55 40 L70 42 L60 52 L63 67 L50 59 L37 67 L40 52 L30 42 L45 40 Z"
                          fill="#FFD700"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">
                        Progress to <span className="font-medium">$5 Gift Card</span>
                      </span>
                      <span className="font-medium">{points}/5000</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-600 to-pink-400 rounded-full transition-all duration-500"
                        style={{ width: `${calculateProgress()}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">{getProgressMessage()}</p>
                  </div>
                </div>
              </div>

              {/* Daily Streak Card */}
              <div className="shadow-sm rounded-2xl hover:-translate-y-1 hover:shadow-lg border border-gray-200 overflow-hidden transition-all duration-200">
                <div className="p-4 bg-indigo-50 border-b border-gray-200">
                  <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-700">
                    <Calendar className="h-5 w-5 text-blue-400" />
                    Daily Streak
                  </h3>
                </div>
                <div className="p-4">
                  <div className="font-extrabold text-4xl text-purple-600 mb-2">
                    {streak} day{streak !== 1 && 's'}
                  </div>
                  <div className="flex mt-4 space-x-2 justify-center">
                    {weekDays.map((day, index) => (
                      <div
                        key={index}
                        className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 ${
                          index === currentDay
                            ? 'ring-2 ring-purple-600 ring-offset-2 bg-gray-200 text-gray-500'
                            : 'bg-gray-200 text-gray-500'
                        }`}
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 text-center mt-3">
                    Check in daily to earn +5 points
                  </p>
                  <button
                    onClick={handleClaimDaily}
                    className="mt-3 w-full py-3 px-6 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-200 bg-purple-600 text-white hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <Zap className="h-5 w-5" />
                    Claim Today's Points
                  </button>
                </div>
              </div>

              {/* Top Tool Spotlight Card */}
              <div className="hover:-translate-y-1 hover:shadow-lg bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200 transition-all duration-300">
                <div className="p-4 bg-gradient-to-br from-purple-600 to-blue-400 text-white relative overflow-hidden">
                  <span className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Top Tool Spotlight</h3>
                    <div className="w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden">
                      <img
                        src="https://api.flowvahub.com/storage/v1/object/public/icons//reclaim%20(1).png"
                        alt="Reclaim"
                      />
                    </div>
                  </div>
                  <p className="text-lg mt-2">
                    <strong>Reclaim</strong>
                  </p>
                </div>
                <div className="p-4">
                  <div className="flex justify-start mb-4">
                    <div className="w-6 h-6 bg-indigo-50 rounded-md flex items-center justify-center mr-4 flex-shrink-0 text-purple-600">
                      <Calendar size={16} />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-1 font-semibold">Automate and Optimize Your Schedule</h4>
                      <p className="text-sm text-gray-600">
                        Reclaim.ai is an AI-powered calendar assistant that automatically schedules
                        your tasks, meetings, and breaks to boost productivity. Free to try — earn
                        Flowva Points when you sign up!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-4 pb-4 flex justify-between items-center gap-2 border-t border-gray-200 pt-4">
                  <button
                    onClick={handleSignUp}
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-full font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <UserPlus size={18} />
                    Sign up
                  </button>
                  <button
                    onClick={handleClaimSpotlight}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 px-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2"
                  >
                    <Gift size={18} />
                    Claim 50 pts
                  </button>
                </div>
              </div>
            </div>

            {/* Earn More Points */}
            <div className="space-y-6">
              <h2 className="text-lg md:text-2xl my-3 text-black border-l-4 border-purple-600 pl-3 font-semibold">
                Earn More Points
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Referral Challenge */}
                <div className="transition-all hover:border-purple-600 hover:-translate-y-1 hover:shadow-lg border border-gray-200 rounded-xl overflow-hidden">
                  <div className="p-4 border-b border-gray-200 bg-white flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-purple-100 text-purple-600">
                      <Star size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Refer and win 10,000 points!</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="font-medium text-sm">
                      Invite 3 friends by Nov 20 and earn a chance to be one of 5 winners of{' '}
                      <span className="text-purple-600">10,000 points</span>. Friends must complete
                      onboarding to qualify.
                    </p>
                  </div>
                </div>

                {/* Share Your Stack */}
                <div className="transition-all hover:border-purple-600 hover:-translate-y-1 hover:shadow-lg border border-gray-200 rounded-xl overflow-hidden">
                  <div className="p-4 border-b border-gray-200 bg-white flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-purple-100 text-purple-600">
                      <Share2 size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Share Your Stack</h3>
                      <p className="text-xs text-gray-500">Earn +25 pts</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-sm">Share your tool stack</p>
                      <button
                        onClick={handleShareStack}
                        className="bg-indigo-50 hover:text-white hover:bg-purple-600 text-purple-600 py-2 px-4 rounded-full font-semibold text-sm transition-all duration-200 inline-flex items-center gap-2"
                      >
                        <Share2 size={16} />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Refer & Earn */}
            <div className="space-y-6 mt-8">
              <h2 className="text-lg md:text-2xl my-3 text-black border-l-4 border-purple-600 pl-3 font-semibold">
                Refer & Earn
              </h2>
              <div className="shadow-sm rounded-2xl hover:-translate-y-1 hover:shadow-lg border border-gray-200 overflow-hidden transition-all duration-200">
                <div className="p-4 bg-indigo-50 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-purple-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-700">Share Your Link</h3>
                      <p className="text-gray-500 text-sm">
                        Invite friends and earn 25 points when they join!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="space-y-6">
                    <div className="flex justify-between mb-4">
                      <div className="text-center p-2 flex-1">
                        <div className="text-2xl font-semibold text-purple-600">{referrals}</div>
                        <div className="text-gray-600 text-sm">Referrals</div>
                      </div>
                      <div className="text-center p-2 flex-1">
                        <div className="text-2xl font-semibold text-purple-600">
                          {pointsFromReferrals}
                        </div>
                        <div className="text-gray-600 text-sm">Points Earned</div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-sm mb-2 text-gray-700">Your personal referral link:</p>
                      <div className="relative">
                        <input
                          type="text"
                          readOnly
                          value={referralLink}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white pr-10"
                        />
                        <button
                          onClick={handleCopyLink}
                          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                        >
                          <Copy className="text-purple-600" size={20} />
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-center gap-4 mt-4">
                      <button
                        onClick={() => shareOnSocial('facebook')}
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform hover:-translate-y-1"
                        style={{ background: '#1877F2' }}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => shareOnSocial('twitter')}
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform hover:-translate-y-1"
                        style={{ background: '#000000' }}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => shareOnSocial('linkedin')}
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform hover:-translate-y-1"
                        style={{ background: '#0077B5' }}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => shareOnSocial('whatsapp')}
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform hover:-translate-y-1"
                        style={{ background: '#25D366' }}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Redeem Rewards Tab
          <div className="py-6">
            <div className="text-center py-20">
              <Gift size={80} className="mx-auto text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Redeem Your Rewards</h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                You currently have <strong>{points} points</strong>. Keep earning to unlock amazing
                rewards!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-purple-600 transition-all">
                  <div className="text-4xl mb-4">🎁</div>
                  <h4 className="font-bold text-lg mb-2">$5 Gift Card</h4>
                  <p className="text-purple-600 font-semibold mb-4">5,000 points</p>
                  <button
                    disabled={points < 5000}
                    className="w-full py-2 px-4 bg-purple-600 text-white rounded-full font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-purple-700 transition-colors"
                  >
                    {points >= 5000 ? 'Redeem' : 'Locked'}
                  </button>
                </div>
                <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-purple-600 transition-all">
                  <div className="text-4xl mb-4">💎</div>
                  <h4 className="font-bold text-lg mb-2">$10 Gift Card</h4>
                  <p className="text-purple-600 font-semibold mb-4">10,000 points</p>
                  <button
                    disabled={points < 10000}
                    className="w-full py-2 px-4 bg-purple-600 text-white rounded-full font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-purple-700 transition-colors"
                  >
                    {points >= 10000 ? 'Redeem' : 'Locked'}
                  </button>
                </div>
                <div className="border-2 border-gray-200 rounded-xl p-6 hover:border-purple-600 transition-all">
                  <div className="text-4xl mb-4">🏆</div>
                  <h4 className="font-bold text-lg mb-2">$25 Gift Card</h4>
                  <p className="text-purple-600 font-semibold mb-4">25,000 points</p>
                  <button
                    disabled={points < 25000}
                    className="w-full py-2 px-4 bg-purple-600 text-white rounded-full font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-purple-700 transition-colors"
                  >
                    {points >= 25000 ? 'Redeem' : 'Locked'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RewardsHub;
