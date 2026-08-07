/**
 * CPL — Footer Component
 * Professional footer with copyright, version, and quick links.
 */

import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import { Heart } from 'lucide-react';
import { APP_VERSION, ROUTES } from '../../utils/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-dark-800/50 bg-dark-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Logo size="sm" />
            <p className="text-sm text-dark-500">
              © {currentYear} C Code Premier League. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-sm text-dark-400">
            <Link to={ROUTES.HOME} className="hover:text-dark-200 transition-colors">
              Home
            </Link>
            <Link to={ROUTES.FEATURES} className="hover:text-dark-200 transition-colors">
              Features
            </Link>
            <Link to={ROUTES.ABOUT} className="hover:text-dark-200 transition-colors">
              About
            </Link>
            <Link to={ROUTES.LEADERBOARD} className="hover:text-dark-200 transition-colors">
              Leaderboard
            </Link>
          </div>

          {/* Version */}
          <div className="text-xs text-dark-600 font-mono">
            v{APP_VERSION}
          </div>
        </div>

        {/* Made with love */}
        <div className="mt-6 pt-4 border-t border-dark-800/30 text-center">
          <p className="text-xs text-dark-600 flex items-center justify-center gap-1">
            Made with <Heart size={12} className="text-error-400 fill-error-400" /> for
            Engineering Students
          </p>
        </div>
      </div>
    </footer>
  );
}
