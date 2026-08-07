import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Mail, Building, BookOpen, Calendar, Edit3, 
  Key, LogOut, Sun, Moon, Monitor, Camera, X, Check, Lock
} from 'lucide-react';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import { userService } from '../../services/user.service';
import { PageWrapper } from '../../components/common';

const glassClasses = "bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl border border-gray-200 dark:border-dark-700 shadow-sm rounded-2xl";
const inputClasses = "w-full bg-white dark:bg-dark-900 border border-gray-300 dark:border-dark-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none";

export default function ProfilePage() {
  const { user, updateProfileData, logout } = useAuth();
  const { theme, setTheme } = useTheme();
  
  // Modals & States
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
  
  // Forms
  const [profileForm, setProfileForm] = useState({
    fullName: user?.fullName || '',
    username: user?.username || '',
    rollNumber: user?.rollNumber || '',
    email: user?.email || '',
    college: user?.college || 'SRKR Engineering College',
    department: user?.department || 'CSD',
    year: user?.year || 1,
    bio: user?.bio || '',
    profilePicture: user?.profilePicture || ''
  });
  
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const fileInputRef = useRef(null);

  // -- Profile Edit Logic --
  const handleProfileChange = (e) => {
    setProfileForm({ ...profileForm, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)) {
      toast.error('Only JPG and PNG images are allowed.');
      return;
    }

    // Compress & Convert to Base64
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 300;
        const scaleSize = MAX_WIDTH / img.width;
        canvas.width = MAX_WIDTH;
        canvas.height = img.height * scaleSize;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
        setProfileForm({ ...profileForm, profilePicture: dataUrl });
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const saveProfile = async (e) => {
    e.preventDefault();
    setIsSavingProfile(true);
    const res = await updateProfileData(profileForm);
    setIsSavingProfile(false);
    if (res.success) {
      setIsEditModalOpen(false);
    }
  };

  // -- Password Update Logic --
  const handlePasswordChange = (e) => {
    setPasswordForm({ ...passwordForm, [e.target.name]: e.target.value });
  };

  const updatePassword = async (e) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      toast.error('New passwords do not match!');
      return;
    }
    if (passwordForm.newPassword.length < 6) {
      toast.error('Password must be at least 6 characters long.');
      return;
    }

    setIsUpdatingPassword(true);
    try {
      const res = await userService.updatePassword({
        currentPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword
      });
      if (res.success) {
        toast.success('Password updated successfully!');
        setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
      }
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to update password');
    } finally {
      setIsUpdatingPassword(false);
    }
  };

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto space-y-8 pb-12">
        
        {/* Profile Header Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className={`${glassClasses} p-8 relative overflow-hidden`}
        >
          {/* Background Decorative Blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full border-4 border-white dark:border-dark-800 shadow-xl overflow-hidden bg-gray-100 dark:bg-dark-900 flex items-center justify-center">
                {user?.profilePicture ? (
                  <img src={user.profilePicture} alt={user.fullName} className="w-full h-full object-cover" />
                ) : (
                  <User size={48} className="text-gray-400 dark:text-dark-400" />
                )}
              </div>
            </div>

            <div className="flex-1 text-center md:text-left space-y-3">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{user?.fullName}</h1>
                {user?.username && <p className="text-primary-600 dark:text-primary-400 font-medium">@{user.username}</p>}
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 max-w-xl">
                {user?.bio || "No bio added yet. Add a short bio to let others know about you!"}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                  <Mail size={16} /> {user?.email}
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                  <Building size={16} /> {user?.college || 'SRKR Engineering College'}
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                  <BookOpen size={16} /> {user?.department}
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                  <Calendar size={16} /> Year {user?.year}
                </div>
              </div>
            </div>

            <button 
              onClick={() => setIsEditModalOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-semibold hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors flex items-center gap-2 shrink-0 shadow-sm"
            >
              <Edit3 size={18} /> Edit Profile
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Account Settings (Password) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className={`lg:col-span-2 ${glassClasses} p-8`}
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-dark-700">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
                <Key size={20} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Account Security</h2>
            </div>

            <form onSubmit={updatePassword} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Current Password</label>
                <input 
                  type="password" name="currentPassword" required
                  value={passwordForm.currentPassword} onChange={handlePasswordChange}
                  className={inputClasses} placeholder="Enter current password"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">New Password</label>
                  <input 
                    type="password" name="newPassword" required minLength={6}
                    value={passwordForm.newPassword} onChange={handlePasswordChange}
                    className={inputClasses} placeholder="Enter new password"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Confirm Password</label>
                  <input 
                    type="password" name="confirmPassword" required minLength={6}
                    value={passwordForm.confirmPassword} onChange={handlePasswordChange}
                    className={inputClasses} placeholder="Confirm new password"
                  />
                </div>
              </div>
              <div className="pt-2">
                <button 
                  type="submit" disabled={isUpdatingPassword}
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold shadow-md shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 w-full md:w-auto"
                >
                  {isUpdatingPassword ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Lock size={18} />}
                  Update Password
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right Column: Theme & Danger Zone */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className={`${glassClasses} p-8`}
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-dark-700">
                <div className="p-2 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-lg">
                  <Sun size={20} />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Theme Settings</h2>
              </div>
              
              <div className="space-y-3">
                {[
                  { id: 'light', icon: Sun, label: 'Light Mode' },
                  { id: 'dark', icon: Moon, label: 'Dark Mode' },
                  { id: 'system', icon: Monitor, label: 'System Default' }
                ].map(t => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`w-full flex items-center gap-3 p-4 rounded-xl border transition-all ${
                      theme === t.id 
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 ring-1 ring-primary-500' 
                        : 'border-gray-200 dark:border-dark-700 hover:border-gray-300 dark:hover:border-dark-600 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <t.icon size={20} />
                    <span className="font-semibold">{t.label}</span>
                    {theme === t.id && <Check size={18} className="ml-auto" />}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className={`${glassClasses} p-8 border-error-100 dark:border-error-900/30`}
            >
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Logout</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                Are you sure you want to log out of your account? You will need to sign in again to access your progress.
              </p>
              <button 
                onClick={() => setIsLogoutModalOpen(true)}
                className="w-full px-6 py-3 bg-error-50 dark:bg-error-900/20 text-error-600 dark:text-error-400 hover:bg-error-100 dark:hover:bg-error-900/40 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <LogOut size={18} /> Log Out Account
              </button>
            </motion.div>
          </div>

        </div>
      </div>

      {/* --- Edit Profile Modal --- */}
      <AnimatePresence>
        {isEditModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => !isSavingProfile && setIsEditModalOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className={`${glassClasses} w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar relative z-10 p-6 sm:p-8`}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Edit Profile</h2>
                <button 
                  onClick={() => setIsEditModalOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-full transition-colors text-gray-500"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={saveProfile} className="space-y-6">
                {/* Profile Pic Upload */}
                <div className="flex flex-col items-center gap-4">
                  <div className="relative group">
                    <div className="w-24 h-24 rounded-full border-4 border-gray-100 dark:border-dark-700 overflow-hidden bg-gray-50 dark:bg-dark-900">
                      {profileForm.profilePicture ? (
                        <img src={profileForm.profilePicture} alt="Preview" className="w-full h-full object-cover" />
                      ) : (
                        <User size={40} className="w-full h-full p-6 text-gray-300" />
                      )}
                    </div>
                    <button 
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute inset-0 bg-black/50 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-full cursor-pointer font-medium text-xs"
                    >
                      <Camera size={20} className="mb-1" /> Change
                    </button>
                    <input 
                      type="file" ref={fileInputRef} className="hidden" 
                      accept=".jpg,.jpeg,.png" onChange={handleImageUpload}
                    />
                  </div>
                  <p className="text-xs text-gray-500 text-center max-w-[200px]">Upload a square JPG or PNG image. Max width is 300px.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Full Name <span className="text-error-500">*</span></label>
                    <input type="text" name="fullName" required value={profileForm.fullName} onChange={handleProfileChange} className={inputClasses} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Username</label>
                    <input type="text" name="username" value={profileForm.username} onChange={handleProfileChange} className={inputClasses} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Roll Number <span className="text-error-500">*</span></label>
                    <input type="text" name="rollNumber" required value={profileForm.rollNumber} onChange={handleProfileChange} className={inputClasses} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address <span className="text-error-500">*</span></label>
                    <input type="email" name="email" required value={profileForm.email} onChange={handleProfileChange} className={inputClasses} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">College</label>
                    <input type="text" name="college" value={profileForm.college} onChange={handleProfileChange} className={inputClasses} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Department</label>
                    <select name="department" value={profileForm.department} onChange={handleProfileChange} className={inputClasses}>
                      <option value="CSD">CSD</option>
                      <option value="CSIT">CSIT</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Academic Year</label>
                    <select name="year" value={profileForm.year} onChange={handleProfileChange} className={inputClasses}>
                      <option value={1}>1st Year</option>
                      <option value={2}>2nd Year</option>
                      <option value={3}>3rd Year</option>
                      <option value={4}>4th Year</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Bio</label>
                    <textarea 
                      name="bio" rows="3" maxLength={250}
                      value={profileForm.bio} onChange={handleProfileChange} 
                      className={`${inputClasses} resize-none`} placeholder="Tell us about yourself..."
                    />
                    <div className="text-xs text-gray-500 mt-2 text-right">{profileForm.bio.length}/250</div>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-gray-100 dark:border-dark-700">
                  <button type="button" onClick={() => setIsEditModalOpen(false)} className="px-5 py-2.5 rounded-xl font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors">
                    Cancel
                  </button>
                  <button type="submit" disabled={isSavingProfile} className="px-6 py-2.5 rounded-xl font-semibold text-white bg-primary-600 hover:bg-primary-700 shadow-md transition-all flex items-center justify-center min-w-[120px]">
                    {isSavingProfile ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : 'Save Changes'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- Logout Confirmation Modal --- */}
      <AnimatePresence>
        {isLogoutModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className={`${glassClasses} w-full max-w-sm p-6 relative z-10 text-center`}>
              <div className="w-16 h-16 mx-auto bg-error-50 dark:bg-error-900/30 text-error-500 rounded-full flex items-center justify-center mb-4">
                <LogOut size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ready to leave?</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">
                You are about to log out of your account. Any unsaved compiler progress will be lost.
              </p>
              <div className="flex gap-3">
                <button onClick={() => setIsLogoutModalOpen(false)} className="flex-1 px-4 py-2.5 rounded-xl font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors">
                  Cancel
                </button>
                <button onClick={() => { setIsLogoutModalOpen(false); logout(); }} className="flex-1 px-4 py-2.5 rounded-xl font-semibold text-white bg-error-600 hover:bg-error-700 transition-colors shadow-md shadow-error-600/20">
                  Log Out
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </PageWrapper>
  );
}
