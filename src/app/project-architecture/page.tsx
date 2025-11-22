"use client";

import React, { useState } from 'react';
import { ChevronRight, Database, Server, Globe, Cpu, ShoppingCart, Zap, BarChart, Lock, Cloud, User, ArrowRightLeft } 
from 'lucide-react';

const ProjectArchitecture = () => {
  const [activePhase, setActivePhase] = useState('phase1');

  const phases = [
    { id: 'phase1', name: 'Phase 01', title: 'Single Shop MVP' },
    { id: 'phase2', name: 'Phase 02', title: 'Multi-Shop SaaS' },
    { id: 'phase3', name: 'Phase 03', title: 'Discovery Algorithm' },
    { id: 'phase4', name: 'Phase 04', title: 'AI Growth Assistant' },
    { id: 'phase5', name: 'Phase 05', title: 'Global Scaling' }
  ];

  const Phase1Architecture = () => (
    <div className="Phase01Data space-y-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Phase 01: Single Shop E-Commerce Architecture</h3>
      
      <div className="space-y-4">
        
        <div className="border-2 border-blue-500 rounded-lg p-6 bg-blue-50">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="text-blue-600" size={24} />
            <h4 className="text-xl font-semibold text-blue-800">Client Layer</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Web Browser</h5>
              <ul className="text-sm space-y-1">
                <li>• Customer Interface</li>
                <li>• Product Browsing</li>
                <li>• Cart & Checkout</li>
                <li>• Repair Booking</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Shop Owner Dashboard</h5>
              <ul className="text-sm space-y-1">
                <li>• Product Management</li>
                <li>• Order Management</li>
                <li>• Analytics View</li>
                <li>• Customer Chat</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Mobile Responsive</h5>
              <ul className="text-sm space-y-1">
                <li>• Responsive Design</li>
                <li>• Touch Optimized</li>
                <li>• Progressive Web App</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-2 border-green-500 rounded-lg p-6 bg-green-50">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="text-green-600" size={24} />
            <h4 className="text-xl font-semibold text-green-800">Frontend Layer (Next.js)</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2 text-sm">Pages</h5>
              <ul className="text-xs space-y-1">
                <li>• Home (/)</li>
                <li>• Products (/products)</li>
                <li>• Product Detail</li>
                <li>• Cart (/cart)</li>
                <li>• Checkout</li>
                <li>• Repairs</li>
                <li>• Dashboard</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2 text-sm">Components</h5>
              <ul className="text-xs space-y-1">
                <li>• ProductCard</li>
                <li>• NavBar</li>
                <li>• SearchBar</li>
                <li>• CartWidget</li>
                <li>• ChatWindow</li>
                <li>• ReviewList</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2 text-sm">State Management</h5>
              <ul className="text-xs space-y-1">
                <li>• React Context</li>
                <li>• useState/useReducer</li>
                <li>• Cart State</li>
                <li>• Auth State</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2 text-sm">Styling</h5>
              <ul className="text-xs space-y-1">
                <li>• TailwindCSS</li>
                <li>• Responsive Grid</li>
                <li>• Dark Mode Ready</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 bg-white p-3 rounded shadow">
            <p className="text-sm"><strong>Hosting:</strong> Vercel (Frontend CDN + SSR)</p>
          </div>
        </div>

        <div className="border-2 border-purple-500 rounded-lg p-6 bg-purple-50">
          <div className="flex items-center gap-2 mb-4">
            <Server className="text-purple-600" size={24} />
            <h4 className="text-xl font-semibold text-purple-800">Backend API Layer (Node.js + Express)</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Core APIs</h5>
              <ul className="text-xs space-y-1">
                <li>• /api/auth - Login, Register</li>
                <li>• /api/products - CRUD</li>
                <li>• /api/orders - Management</li>
                <li>• /api/repairs - Bookings</li>
                <li>• /api/old-items - Trade-in</li>
                <li>• /api/reviews - Ratings</li>
                <li>• /api/chat - Messaging</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Middleware</h5>
              <ul className="text-xs space-y-1">
                <li>• JWT Authentication</li>
                <li>• Request Validation</li>
                <li>• Error Handling</li>
                <li>• Rate Limiting</li>
                <li>• CORS Configuration</li>
                <li>• Request Logging</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Services</h5>
              <ul className="text-xs space-y-1">
                <li>• Email Service</li>
                <li>• SMS Notifications</li>
                <li>• Payment Processing</li>
                <li>• File Upload Handler</li>
                <li>• Analytics Tracker</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 bg-white p-3 rounded shadow">
            <p className="text-sm"><strong>Hosting:</strong> Render / Railway</p>
          </div>
        </div>

        <div className="border-2 border-yellow-500 rounded-lg p-6 bg-yellow-50">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="text-yellow-600" size={24} />
            <h4 className="text-xl font-semibold text-yellow-800">Real-time Communication (Socket.io)</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Chat System</h5>
              <ul className="text-xs space-y-1">
                <li>• Customer ↔ Shop Owner</li>
                <li>• Real-time Messaging</li>
                <li>• Typing Indicators</li>
                <li>• Read Receipts</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Notifications</h5>
              <ul className="text-xs space-y-1">
                <li>• New Order Alerts</li>
                <li>• Repair Updates</li>
                <li>• Message Notifications</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Live Updates</h5>
              <ul className="text-xs space-y-1">
                <li>• Order Status Changes</li>
                <li>• Stock Updates</li>
                <li>• Dashboard Metrics</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-2 border-red-500 rounded-lg p-6 bg-red-50">
          <div className="flex items-center gap-2 mb-4">
            <Database className="text-red-600" size={24} />
            <h4 className="text-xl font-semibold text-red-800">Database Layer (PostgreSQL)</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2 text-sm">Core Tables</h5>
              <ul className="text-xs space-y-1">
                <li>• users</li>
                <li>• shops</li>
                <li>• products</li>
                <li>• orders</li>
                <li>• order_items</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2 text-sm">Service Tables</h5>
              <ul className="text-xs space-y-1">
                <li>• repairs</li>
                <li>• old_items</li>
                <li>• reviews</li>
                <li>• messages</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2 text-sm">Features</h5>
              <ul className="text-xs space-y-1">
                <li>• ACID Transactions</li>
                <li>• Foreign Keys</li>
                <li>• Indexes</li>
                <li>• Full-text Search</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2 text-sm">ORM</h5>
              <ul className="text-xs space-y-1">
                <li>• Prisma</li>
                <li>• Type-safe Queries</li>
                <li>• Migrations</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 bg-white p-3 rounded shadow">
            <p className="text-sm"><strong>Hosting:</strong> Neon / Supabase</p>
          </div>
        </div>

        <div className="border-2 border-indigo-500 rounded-lg p-6 bg-indigo-50">
          <div className="flex items-center gap-2 mb-4">
            <Cloud className="text-indigo-600" size={24} />
            <h4 className="text-xl font-semibold text-indigo-800">External Services</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Payments</h5>
              <ul className="text-xs space-y-1">
                <li>• Stripe API</li>
                <li>• Payment Intents</li>
                <li>• Webhooks</li>
                <li>• Cash on Delivery</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Storage</h5>
              <ul className="text-xs space-y-1">
                <li>• Cloudinary</li>
                <li>• Image Uploads</li>
                <li>• CDN Delivery</li>
                <li>• Transformations</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Communications</h5>
              <ul className="text-xs space-y-1">
                <li>• SendGrid (Email)</li>
                <li>• Twilio (SMS)</li>
                <li>• Email Templates</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-2 border-gray-500 rounded-lg p-6 bg-gray-50">
          <div className="flex items-center gap-2 mb-4">
            <Lock className="text-gray-600" size={24} />
            <h4 className="text-xl font-semibold text-gray-800">Security & Monitoring</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Authentication</h5>
              <ul className="text-xs space-y-1">
                <li>• JWT Tokens</li>
                <li>• bcrypt Hashing</li>
                <li>• Refresh Tokens</li>
                <li>• Session Management</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Security</h5>
              <ul className="text-xs space-y-1">
                <li>• HTTPS/SSL</li>
                <li>• CORS Protection</li>
                <li>• XSS Prevention</li>
                <li>• SQL Injection Protection</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Monitoring</h5>
              <ul className="text-xs space-y-1">
                <li>• Sentry (Errors)</li>
                <li>• Google Analytics</li>
                <li>• Uptime Monitoring</li>
                <li>• Log Aggregation</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-6 bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg">
        <h4 className="text-lg font-semibold mb-4">Typical Request Flow</h4>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Globe className="mx-auto mb-2 text-blue-600" />
              <p className="text-sm font-semibold">Customer Browser</p>
            </div>
          </div>
          <ChevronRight className="text-gray-400 rotate-90 md:rotate-0" />
          <div className="text-center">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Zap className="mx-auto mb-2 text-green-600" />
              <p className="text-sm font-semibold">Next.js Frontend</p>
            </div>
          </div>
          <ChevronRight className="text-gray-400 rotate-90 md:rotate-0" />
          <div className="text-center">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Server className="mx-auto mb-2 text-purple-600" />
              <p className="text-sm font-semibold">Express API</p>
            </div>
          </div>
          <ChevronRight className="text-gray-400 rotate-90 md:rotate-0" />
          <div className="text-center">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Database className="mx-auto mb-2 text-red-600" />
              <p className="text-sm font-semibold">PostgreSQL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Phase2Architecture = () => (
    <div className="Phase02Data space-y-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Phase 02: Multi-Shop SaaS Architecture</h3>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="text-sm"><strong>Key Changes:</strong> Multi-tenancy with shop_id, Subscription billing, Subdomains, Admin console, Row-level security</p>
      </div>

      <div className="space-y-4">
        
        <div className="border-2 border-green-500 rounded-lg p-6 bg-green-50">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="text-green-600" size={24} />
            <h4 className="text-xl font-semibold text-green-800">Multi-Tenant Frontend Layer</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2 text-sm">Main Platform</h5>
              <ul className="text-xs space-y-1">
                <li>• smartshopai.com</li>
                <li>• Landing Page</li>
                <li>• Pricing Plans</li>
                <li>• Shop Registration</li>
                <li>• Global Discovery</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2 text-sm">Subdomains</h5>
              <ul className="text-xs space-y-1">
                <li>• shop.smartshopai.com</li>
                <li>• Dynamic Routing</li>
                <li>• Shop Branding</li>
                <li>• Custom Themes</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2 text-sm">Admin Portal</h5>
              <ul className="text-xs space-y-1">
                <li>• admin.smartshopai.com</li>
                <li>• Shop Management</li>
                <li>• Revenue Dashboard</li>
                <li>• Content Moderation</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2 text-sm">Custom Domains</h5>
              <ul className="text-xs space-y-1">
                <li>• shop-example.com</li>
                <li>• SSL Auto-provision</li>
                <li>• DNS Configuration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-2 border-purple-500 rounded-lg p-6 bg-purple-50">
          <div className="flex items-center gap-2 mb-4">
            <Server className="text-purple-600" size={24} />
            <h4 className="text-xl font-semibold text-purple-800">Enhanced Backend APIs</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">New APIs</h5>
              <ul className="text-xs space-y-1">
                <li>• /api/shops - Shop CRUD</li>
                <li>• /api/onboarding - Setup</li>
                <li>• /api/subscriptions - Billing</li>
                <li>• /api/domains - Domain Mgmt</li>
                <li>• /api/admin - Platform</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Middleware Updates</h5>
              <ul className="text-xs space-y-1">
                <li>• Tenant Context Injection</li>
                <li>• Shop-scoped Queries</li>
                <li>• Rate Limit per Tenant</li>
                <li>• Quota Enforcement</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Background Jobs</h5>
              <ul className="text-xs space-y-1">
                <li>• Subscription Renewals</li>
                <li>• Invoice Generation</li>
                <li>• Usage Analytics</li>
                <li>• Email Campaigns</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-2 border-red-500 rounded-lg p-6 bg-red-50">
          <div className="flex items-center gap-2 mb-4">
            <Database className="text-red-600" size={24} />
            <h4 className="text-xl font-semibold text-red-800">Multi-Tenant Database</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2 text-sm">Schema Design</h5>
              <ul className="text-xs space-y-1">
                <li>• Single Database</li>
                <li>• Shared Schema</li>
                <li>• shop_id on all tables</li>
                <li>• Row-Level Security</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2 text-sm">New Tables</h5>
              <ul className="text-xs space-y-1">
                <li>• subscriptions</li>
                <li>• invoices</li>
                <li>• usage_metrics</li>
                <li>• shop_settings</li>
                <li>• domains</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2 text-sm">Isolation</h5>
              <ul className="text-xs space-y-1">
                <li>• RLS Policies</li>
                <li>• Scoped Indexes</li>
                <li>• Tenant-aware Queries</li>
                <li>• Audit Logging</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2 text-sm">Performance</h5>
              <ul className="text-xs space-y-1">
                <li>• Composite Indexes</li>
                <li>• Query Optimization</li>
                <li>• Connection Pooling</li>
                <li>• Read Replicas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-2 border-blue-500 rounded-lg p-6 bg-blue-50">
          <div className="flex items-center gap-2 mb-4">
            <ShoppingCart className="text-blue-600" size={24} />
            <h4 className="text-xl font-semibold text-blue-800">Billing System (Stripe)</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Plans</h5>
              <ul className="text-xs space-y-1">
                <li>• Free Trial (14 days)</li>
                <li>• Basic ($29/month)</li>
                <li>• Pro ($79/month)</li>
                <li>• Enterprise (Custom)</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Features</h5>
              <ul className="text-xs space-y-1">
                <li>• Stripe Checkout</li>
                <li>• Recurring Billing</li>
                <li>• Proration</li>
                <li>• Webhooks</li>
                <li>• Invoice Portal</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Usage Tracking</h5>
              <ul className="text-xs space-y-1">
                <li>• Product Limits</li>
                <li>• Order Volume</li>
                <li>• Storage Quotas</li>
                <li>• API Rate Limits</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-2 border-orange-500 rounded-lg p-6 bg-orange-50">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="text-orange-600" size={24} />
            <h4 className="text-xl font-semibold text-orange-800">Caching Layer (Redis)</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Cache Strategy</h5>
              <ul className="text-xs space-y-1">
                <li>• Product Listings</li>
                <li>• Shop Metadata</li>
                <li>• User Sessions</li>
                <li>• Rate Limit Counters</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Session Store</h5>
              <ul className="text-xs space-y-1">
                <li>• JWT Blacklist</li>
                <li>• Active Sessions</li>
                <li>• Temporary Data</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Queue System</h5>
              <ul className="text-xs space-y-1">
                <li>• Email Queue</li>
                <li>• Invoice Generation</li>
                <li>• Analytics Processing</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-6 bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg">
        <h4 className="text-lg font-semibold mb-4">Multi-Tenant Request Flow</h4>
        <div className="space-y-2 text-sm">
          <p><strong>1.</strong> Customer visits shop1.smartshopai.com</p>
          <p><strong>2.</strong> DNS resolves to main platform</p>
          <p><strong>3.</strong> Next.js detects subdomain</p>
          <p><strong>4.</strong> Frontend loads shop-specific theme</p>
          <p><strong>5.</strong> API requests include shop context</p>
          <p><strong>6.</strong> Backend injects shop_id filter</p>
          <p><strong>7.</strong> PostgreSQL RLS enforces isolation</p>
          <p><strong>8.</strong> Response scoped to specific shop</p>
        </div>
      </div>
    </div>
  );

  const Phase3Architecture = () => (
    <div className="Phase03Data space-y-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Phase 03: Discovery Algorithm Architecture</h3>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p className="text-sm"><strong>Key Addition:</strong> ML-powered recommendation engine, personalized feeds, trending algorithms, event tracking</p>
      </div>

      <div className="space-y-4">
        
        <div className="border-2 border-purple-500 rounded-lg p-6 bg-purple-50">
          <div className="flex items-center gap-2 mb-4">
            <Cpu className="text-purple-600" size={24} />
            <h4 className="text-xl font-semibold text-purple-800">ML Recommendation Engine</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Algorithms</h5>
              <ul className="text-xs space-y-1">
                <li>• Collaborative Filtering</li>
                <li>• Content-Based Filtering</li>
                <li>• Hybrid Models</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Data Sources</h5>
              <ul className="text-xs space-y-1">
                <li>• User Behavior</li>
                <li>• Product Metadata</li>
                <li>• External APIs</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Evaluation Metrics</h5>
              <ul className="text-xs space-y-1">
                <li>• Click-Through Rate (CTR)</li>
                <li>• Conversion Rate</li>
                <li>• User Engagement</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );

  const Phase4Architecture = () => (
    <div className="Phase04Data space-y-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Phase 04: Personalization Architecture</h3>

      <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
        <p className="text-sm"><strong>Key Addition:</strong> User profiles, preference tracking, dynamic content</p>
      </div>

      <div className="space-y-4">

        <div className="border-2 border-green-500 rounded-lg p-6 bg-green-50">
          <div className="flex items-center gap-2 mb-4">
            <User className="text-green-600" size={24} />
            <h4 className="text-xl font-semibold text-green-800">User Profiles</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Profile Data</h5>
              <ul className="text-xs space-y-1">
                <li>• Demographics</li>
                <li>• Preferences</li>
                <li>• Purchase History</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Preference Tracking</h5>
              <ul className="text-xs space-y-1">
                <li>• Click Behavior</li>
                <li>• Search Queries</li>
                <li>• Wishlist Items</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Dynamic Content</h5>
              <ul className="text-xs space-y-1">
                <li>• Personalized Recommendations</li>
                <li>• Targeted Promotions</li>
                <li>• Adaptive UI</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );

  const Phase5Architecture = () => (
    <div className="Phase05Data space-y-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Phase 05: Analytics Architecture</h3>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
        <p className="text-sm"><strong>Key Addition:</strong> Event tracking, user segmentation, reporting</p>
      </div>

      <div className="space-y-4">

        <div className="border-2 border-yellow-500 rounded-lg p-6 bg-yellow-50">
          <div className="flex items-center gap-2 mb-4">
            <BarChart className="text-yellow-600" size={24} />
            <h4 className="text-xl font-semibold text-yellow-800">Analytics Dashboard</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Key Metrics</h5>
              <ul className="text-xs space-y-1">
                <li>• User Acquisition</li>
                <li>• Churn Rate</li>
                <li>• Lifetime Value (LTV)</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">User Segmentation</h5>
              <ul className="text-xs space-y-1">
                <li>• Demographic Segments</li>
                <li>• Behavioral Segments</li>
                <li>• Value-Based Segments</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h5 className="font-semibold mb-2">Reporting</h5>
              <ul className="text-xs space-y-1">
                <li>• Custom Reports</li>
                <li>• Scheduled Reports</li>
                <li>• Export Options</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Project Architecture</h2>
      <Phase1Architecture />
      <Phase2Architecture />
      <Phase3Architecture />
      <Phase4Architecture />
      <Phase5Architecture />
    </div>
  );
};

export default ProjectArchitecture;