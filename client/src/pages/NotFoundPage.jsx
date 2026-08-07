/**
 * CPL — 404 Not Found Page
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/common';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        {/* 404 Number */}
        <motion.h1
          className="text-8xl sm:text-9xl font-bold gradient-text mb-4"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          404
        </motion.h1>

        <h2 className="text-2xl font-semibold text-dark-200 mb-3">
          Page Not Found
        </h2>
        <p className="text-dark-400 mb-8">
          Looks like this code segment doesn't exist. Let's get you back on
          track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/">
            <Button variant="gradient" icon={Home}>
              Go Home
            </Button>
          </Link>
          <Button variant="outline" icon={ArrowLeft} onClick={() => history.back()}>
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
