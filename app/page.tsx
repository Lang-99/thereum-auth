'use client';

import { useState, useEffect } from 'react';
import { Users, CreditCard, AppWindow, UserCheck, LogOut } from 'lucide-react';

export default function ThereumDashboard() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-100">
      {/* Sidebar */}
      <div className="w-72 bg-black border-r border-zinc-800 flex flex-col">
        <div className="p-6 flex items-center gap-3 border-b border-zinc-800">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-2xl font-bold">T</div>
          <div>
            <div className="font-bold text-3xl tracking-tighter">Thereum</div>
            <div className="text-xs text-zinc-500 -mt-1">AUTH • REAL-TIME</div>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-4 bg-zinc-900 rounded-3xl p-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl font-bold">TM</div>
            <div>
              <p className="font-semibold">tienminh</p>
              <p className="text-sm text-zinc-500">trinti...@gmail.com</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          <a href="#" className="flex items-center gap-3 px-5 py-4 bg-purple-600/10 text-purple-400 rounded-3xl">
            <Users className="w-5 h-5" />
            <span className="font-medium">Tổng quan</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-5 py-4 hover:bg-zinc-900 rounded-3xl text-zinc-400 hover:text-white transition">
            <AppWindow className="w-5 h-5" />
            <span>Applications</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-5 py-4 hover:bg-zinc-900 rounded-3xl text-zinc-400 hover:text-white transition">
            <CreditCard className="w-5 h-5" />
            <span>Licenses</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-5 py-4 hover:bg-zinc-900 rounded-3xl text-zinc-400 hover:text-white transition">
            <UserCheck className="w-5 h-5" />
            <span>Users</span>
          </a>
        </nav>

        <div className="p-4 border-t border-zinc-800">
          <button className="flex w-full items-center gap-3 px-5 py-4 text-red-400 hover:bg-zinc-900 rounded-3xl transition">
            <LogOut className="w-5 h-5" />
            <span>Đăng xuất</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="border-b border-zinc-800 bg-zinc-900 px-8 py-5 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Tổng quan</h1>
          <div className="flex items-center gap-6">
            <div className="text-xl font-mono tabular-nums">{time}</div>
            <div className="bg-emerald-500 text-black px-5 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div>
              ONLINE
            </div>
          </div>
        </header>

        <div className="p-8">
          <div className="grid grid-cols-4 gap-6 mb-10">
            {[
              { label: 'SỐ DƯ', value: '42', unit: 'THM Credits' },
              { label: 'GÓI DỊCH VỤ', value: 'Premium', unit: 'Active' },
              { label: 'ỨNG DỤNG', value: '7', unit: '3 Active Keys' },
              { label: 'NGƯỜI DÙNG', value: '1284', unit: 'Total' }
            ].map((stat, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500/50 transition">
                <p className="text-zinc-500 text-sm tracking-widest">{stat.label}</p>
                <p className="text-6xl font-bold mt-4 mb-1 text-white">{stat.value}</p>
                <p className="text-zinc-400">{stat.unit}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Account Info */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <div className="flex justify-between mb-6">
                <h2 className="text-2xl font-semibold">Thông tin tài khoản</h2>
                <span className="bg-emerald-500 text-black px-4 py-1 rounded-full text-sm font-medium">ACTIVE</span>
              </div>
              <div className="space-y-6 text-sm">
                <div className="flex justify-between"><span className="text-zinc-400">OWNER ID</span><span className="font-mono">0x742d...aF91</span></div>
                <div className="flex justify-between"><span className="text-zinc-400">USERNAME</span><span className="font-semibold">tienminh</span></div>
                <div className="flex justify-between"><span className="text-zinc-400">EMAIL</span><span>trinti...@gmail.com</span></div>
                <div className="flex justify-between"><span className="text-zinc-400">CREATED</span><span>19/05/2026</span></div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Hoạt động gần đây</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-zinc-950 p-4 rounded-2xl">
                  <div className="text-emerald-400">Silent ESP</div>
                  <div className="ml-auto text-xs text-zinc-500">2 keys active</div>
                </div>
                <div className="flex items-center gap-4 bg-zinc-950 p-4 rounded-2xl">
                  <div className="text-purple-400">CS2 Internal</div>
                  <div className="ml-auto text-xs text-zinc-500">Just now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
