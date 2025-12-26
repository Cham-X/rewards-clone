# Flowva

A modern landing page application for connecting tech professionals and brands, built with React, Tailwind CSS, and Supabase.

🔗 **Live Demo**: [https://rewards-clone-one.vercel.app/](https://rewards-clone-one.vercel.app/)

## Features

- 🎨 Modern, responsive design with smooth animations
- 📱 Mobile-first approach with full-screen mobile navigation
- 🔄 Tab-based content switching (Users/Brands views)
- ⚡ Fast and optimized performance
- 🎯 Beautiful UI with gradient effects and glassmorphism
- 🗄️ Supabase backend integration

## Tech Stack

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Supabase** - Backend as a Service (Authentication, Database)
- **Lucide React** - Icon library
- **Vite** - Build tool
- **Vercel** - Deployment platform

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **pnpm** package manager - [Install here](https://pnpm.io/installation)
  ```bash
  npm install -g pnpm
  ```
- **Git** - [Download here](https://git-scm.com/)
- **Supabase Account** - [Sign up here](https://supabase.com/)

## Step-by-Step Setup Guide

### Step 1: Clone the Repository

```bash
git clone <your-repository-url>
cd flowva
```

### Step 2: Install Dependencies

```bash
pnpm install
```

### Step 3: Set Up Supabase

#### 3.1 Create a Supabase Project

1. Go to [https://supabase.com/](https://supabase.com/)
2. Sign in or create a new account
3. Click **"New Project"**
4. Fill in the project details:
   - **Name**: Flowva (or your preferred name)
   - **Database Password**: Choose a strong password (save this!)
   - **Region**: Choose the closest region to your users
   - **Pricing Plan**: Select Free tier to start
5. Click **"Create new project"**
6. Wait 2-3 minutes for your project to be set up

#### 3.2 Get Your Supabase Credentials

1. In your Supabase project dashboard, click on **Settings** (gear icon) in the sidebar
2. Navigate to **API** section
3. Copy the following values:
   - **Project URL** (under "Project URL")
   - **anon/public key** (under "Project API keys")

#### 3.3 Set Up Database Tables (Optional)

If your project requires database tables, create them in Supabase:

1. Go to **SQL Editor** in the sidebar
2. Create your tables with SQL, for example:

```sql
-- Example: Users table
CREATE TABLE users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Example: Subscriptions table
CREATE TABLE subscriptions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  plan_type TEXT NOT NULL,
  status TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

3. Click **Run** to execute the SQL

### Step 4: Configure Environment Variables

#### 4.1 Create Environment File

In the root directory of your project, create a `.env` file:

```bash
touch .env
```

#### 4.2 Add Your Supabase Credentials

Open the `.env` file and add the following:

```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional: Additional Configuration
VITE_APP_NAME=Flowva
VITE_API_URL=https://your-api-endpoint.com
```

**Replace** `your_supabase_project_url` and `your_supabase_anon_key` with the values you copied from Step 3.2.

#### 4.3 Create Example Environment File

Create a `.env.example` file for other developers:

```bash
touch .env.example
```

Add this content to `.env.example`:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here

# Optional: Additional Configuration
VITE_APP_NAME=Flowva
VITE_API_URL=https://your-api-endpoint.com
```

### Step 5: Set Up Supabase Client (If Not Already Done)

Create a Supabase client file at `src/lib/supabase.js`:

```javascript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

Install Supabase client if not already installed:

```bash
pnpm add @supabase/supabase-js
```

### Step 6: Set Up Assets

Make sure you have the Flowva logo in the correct location:

```
public/assets/flowva_icon-DYe7ga1V.png
```

If the logo is missing, add your logo to this path.

### Step 7: Run the Development Server

Start the development server:

```bash
pnpm dev
```

The application will open at `http://localhost:5173` (or the port shown in your terminal).

### Step 8: Verify Everything Works

1. Open your browser to `http://localhost:5173`
2. Check that the navbar loads correctly
3. Try switching between "Users" and "Brands" tabs
4. Test the mobile menu (resize your browser or use dev tools)
5. Check the browser console for any errors

## Project Structure

```
flowva/
├── src/
│   ├── components/
│   │   └── landingPage/
│   │       ├── Navbar.jsx
│   │       ├── HeroSection1.jsx
│   │       ├── HeroSection2.jsx
│   │       ├── TabSwitcher.jsx
│   │       ├── BigNews.jsx
│   │       ├── Footer.jsx
│   │       └── ... (other components)
│   ├── layouts/
│   │   └── AnimatedSection.jsx
│   ├── lib/
│   │   └── supabase.js          # Supabase client configuration
│   ├── pages/
│   │   └── LandingPage.jsx
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── assets/
│       └── flowva_icon-DYe7ga1V.png
├── .env                          # Your local environment variables (not committed)
├── .env.example                  # Example environment variables (committed)
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md
```

## Building for Production

### Build the Project

```bash
pnpm build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build Locally

```bash
pnpm preview
```

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Go to [https://vercel.com/](https://vercel.com/)
2. Sign in with GitHub
3. Click **"Add New Project"**
4. Import your Git repository
5. Configure environment variables:
   - Add `VITE_SUPABASE_URL`
   - Add `VITE_SUPABASE_ANON_KEY`
6. Click **"Deploy"**

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
pnpm add -g vercel

# Deploy
vercel

# Follow the prompts and add environment variables when asked
```

### Adding Environment Variables to Vercel

1. Go to your project on Vercel dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable:
   - `VITE_SUPABASE_URL` = your_supabase_url
   - `VITE_SUPABASE_ANON_KEY` = your_supabase_key
4. Redeploy your project

## Environment Variables Reference

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `VITE_SUPABASE_URL` | Your Supabase project URL | Yes | `https://xxxxx.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` |
| `VITE_APP_NAME` | Application name | No | `Flowva` |
| `VITE_API_URL` | External API endpoint | No | `https://api.example.com` |

## Common Issues & Solutions

### Issue 1: "Missing Supabase environment variables" Error

**Solution**: 
- Make sure your `.env` file exists in the root directory
- Verify that the variable names start with `VITE_`
- Restart your development server after adding variables

### Issue 2: Mobile Menu Not Covering Content

**Solution**: The navbar uses `fixed` positioning with `z-50`. Make sure the landing page has `pt-20 md:pt-24` padding.

### Issue 3: Supabase Connection Failed

**Solution**:
- Verify your Supabase project is active
- Check that your API keys are correct
- Ensure your Supabase project region is accessible

### Issue 4: Images Not Loading

**Solution**:
- Check that images are in `public/assets/` folder
- Use absolute paths starting with `/assets/`
- Clear browser cache

## Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run linting (if configured)
pnpm lint

# Install a new package
pnpm add package-name

# Install a dev dependency
pnpm add -D package-name
```

## Key Components

### Navbar
- Responsive navigation with desktop and mobile views
- Full-screen mobile menu with scroll lock
- Animated hamburger to X icon transition

### TabSwitcher
- Toggle between "Users" and "Brands" content
- Smooth tab transitions

### Hero Sections
- **HeroSection1**: For users view
- **HeroSection2**: For brands view with gradient text effects

### Landing Page
- Main page component that orchestrates all sections
- Conditional rendering based on active tab

## Customization

### Colors

The project uses custom colors defined in Tailwind. Key brand colors:
- Primary Purple: `#9013FE`
- Secondary Pink: `#FF8687`
- Dark: `#111111`

### Fonts

The project uses the following fonts:
- **Manrope** - For body text and buttons
- **Impact** - For headings

Make sure to import these fonts in your `index.html` or CSS:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### Tailwind Configuration

Update `tailwind.config.js` to customize the theme:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        impact: ['Impact', 'sans-serif'],
      },
      colors: {
        primary: '#9013FE',
        secondary: '#FF8687',
      },
    },
  },
  plugins: [],
}
```

## Security Best Practices

1. **Never commit `.env` file** - It's already in `.gitignore`
2. **Use environment variables** for all sensitive data
3. **Row Level Security (RLS)** - Enable RLS on Supabase tables
4. **API Keys** - Never expose service role keys in frontend
5. **HTTPS only** - Always use HTTPS in production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@flowva.com or open an issue in the repository.

## Useful Links

- 🌐 [Live Demo](https://rewards-clone-one.vercel.app/)
- 📚 [Supabase Documentation](https://supabase.com/docs)
- 📖 [React Documentation](https://react.dev/)
- 🎨 [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- 🚀 [Vercel Documentation](https://vercel.com/docs)

## Acknowledgments

- Design inspiration from modern SaaS landing pages
- Icons by Lucide React
- Backend powered by Supabase
- Deployed on Vercel
- Built with React and Tailwind CSS

---

**Happy Coding! 🚀**

If you found this project helpful, please consider giving it a ⭐ on GitHub!