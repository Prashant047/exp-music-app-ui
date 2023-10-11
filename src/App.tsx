import * as Dialog from '@radix-ui/react-dialog';
import * as Avatar from '@radix-ui/react-avatar';
import * as Seperator from '@radix-ui/react-separator';
import { ReactNode, useState } from 'react';
import { 
  HamburgerMenuIcon, MagnifyingGlassIcon, BellIcon,
  Cross1Icon, HomeIcon, ActivityLogIcon, PlayIcon,
  RowsIcon, PlusIcon, ColorWheelIcon, DashboardIcon, ArrowLeftIcon, GearIcon, ExitIcon, ChevronLeftIcon, TriangleRightIcon, Share1Icon, UploadIcon, ArrowRightIcon, DotsVerticalIcon
} from '@radix-ui/react-icons';

import cover1 from './cover1.jpg';

const musicData = [
  {
    title: 'Landslide',
    artist: 'Fleetwood Mac',
    album: 'Fleetwood Mac',
    duration: '3:20',
    views: '231K',
    color: '#b91c1c'
  },
  {
    title: 'Baby Come Back',
    artist: 'Players',
    album: 'Players',
    duration: '4:16',
    views: '500K',
    color: '#4d7c0f'
  },
  {
    title: 'Bandy',
    artist: 'Looking Glass',
    album: 'Looking Glass',
    duration: '3:07',
    views: '567K',
    color: '#0f766e'
  },
  {
    title: 'Can I Call You Tonight?',
    artist: 'Dayglow',
    album: 'Dayglow',
    duration: '4:39',
    views: '121K',
    color: '#7e22ce'
  },
  {
    title: 'Angel Of The Morning',
    artist: 'Juice Newton',
    album: 'Juice Newton',
    duration: '4:11',
    views: '678K',
    color: '#be123c'
  },
  {
    title: 'Escape',
    artist: 'Rupert Holmes',
    album: 'Rupert Holmes',
    duration: '4:37',
    views: '800K',
    color: '#082f49'
  },
  {
    title: 'Waterloo',
    artist: 'ABBA',
    album: 'ABBA',
    duration: '2:49',
    views: '349K',
    color: '#7c2d12'
  },
  {
    title: 'Happy Together',
    artist: 'The Turtles',
    album: 'The Turtles',
    duration: '2:56',
    views: '231K',
    color: '#facc15'
  },
  {
    title: 'Here Comes The Rain Again',
    artist: 'Eurythmics',
    album: 'Eurythmics',
    duration: '4:55',
    views: '900K',
    color: '#831843'
  },
]




function App() {
  return (
    <div className='flex justify-start text-neutral-200 h-screen'>
      <div className='hidden lg:block shrink-0 w-64 border-r border-neutral-800'>
        <div className='flex flex-col gap-2 justify-center items-center py-6'>
          <span>
            Adze. <small>DESIGN</small>
          </span>
          <button className='flex items-center gap-2 text-xs bg-blue-700 rounded py-2 px-6'>
            <span>
              <ArrowLeftIcon/>
            </span>
            WEB APP
          </button>
        </div>
        <SideNav/>
        <Seperator.Root
          decorative
          orientation='horizontal'
          className='h-[1px] bg-neutral-700 w-full my-10'
        />
        <div className='px-8 flex flex-col gap-4'>
          <button className='flex items-center gap-4 text-sm text-neutral-500 hover:text-neutral-300'>
            <span>
              <GearIcon/>
            </span>
            Settings
          </button>
          <button className='flex items-center gap-4 text-sm text-neutral-500 hover:text-neutral-300'>
            <span>
              <ExitIcon/>
            </span>
            Log Out
          </button>
        </div>
      </div>
      <main className='flex-1 flex flex-col'>
        <NavBar/>
        <div className='flex-1 overflow-y-scroll'>
          <section className='aspect-video md:h-[400px] md:aspect-auto p-4 lg:p-0 rounded-lg'>
            <div className='relative isolate h-full overflow-hidden rounded-lg lg:rounded-[0px]'>
              <img 
                className='absolute object-center object-cover brightness-50'
                src={cover1} 
                alt="" 
              />
              <div className='relative p-2 sm:p-4 md:p-6 lg:p-8 flex flex-col items-start h-full'>
                <h1 className='text-covermain font-bold'>
                  Ikako Talavadze
                </h1>
                <small className='text-coversub'>
                  43M Monthly Listeners
                </small>
                <button className='bg-neutral-900 px-6 py-1 my-2 text-coversub rounded'>
                  Follow
                </button>
                <div className='flex items-center justify-between mt-auto w-full'>
                  <div className='flex items-center gap-2 '>
                    <button className='bg-neutral-900 text-neutral-200 h-buttonbig w-buttonbig text-sm rounded-full flex items-center justify-center'>
                      <TriangleRightIcon/>
                    </button>
                    <button className='bg-neutral-200 text-neutral-900 h-buttonsmall w-buttonsmall text-sm rounded-full flex items-center justify-center'>
                      <Share1Icon/>
                    </button>
                    <button className='bg-neutral-200 text-neutral-900 h-buttonsmall w-buttonsmall text-sm rounded-full flex items-center justify-center'>
                      <UploadIcon/>
                    </button>
                  </div>
                  <div className='flex items-center gap-2'>
                    <div className='h-buttonsmall w-buttonsmall rounded-full bg-blue-700'>
                    </div>
                    <small className='text-coversub'>
                      54K Followers
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <table
              className='w-full mt-4'
            >
              {musicData.map(({title,artist,duration,views,album, color}, index) => (
                <MusicItem
                  title={title}
                  duration={duration}
                  album={album}
                  artist={artist}
                  views={views}
                  key={index}
                  color={color}

                />
              ))}
            </table>
          </section>
        </div>
      </main>
    </div>
  )
}



function MusicItem({
  title,
  artist,
  album,
  views,
  duration,
  color
}:{
  title:string,
  artist:string,
  album:string,
  views:string,
  duration:string
  color:string
}){
  return (
    <tr className='group hover:bg-neutral-950 transition text-xs border-y border-neutral-800 text-neutral-500'>
      <td className='text-center align-middle'>
        <div className='flex justify-center'>
          <button className='h-8 w-8 border border-neutral-800 rounded-full flex items-center justify-center'>
            <TriangleRightIcon/>
          </button>
        </div>
      </td>
      <td className='w-16'>
        <div className='h-16 w-16 bg-green-600' style={{backgroundColor: color}}>
        </div>
      </td>
      <td className='text-left pl-10 transition group-hover:text-neutral-300'>
        <div>
          <strong className='block'>
            {title}
          </strong>
          <small className='block'>
            {artist}
          </small>
        </div>
      </td>
      <td className=' transition group-hover:text-neutral-300'>
        {album}
      </td>
      <td className='hidden lg:table-cell my-10 transition group-hover:text-neutral-300'>
        {views}
      </td>
      <td className='hidden lg:table-cell my-10 transition group-hover:text-neutral-300'>
        {duration}
      </td>
      <td className='hidden lg:table-cell my-10'>
        <button className='hover:text-neutral-200'>
          <Share1Icon/>
        </button>
      </td>
      <td>
        <button className='hover:text-neutral-200'>
          <UploadIcon/>
        </button>
      </td>
      <td>
        <button className='hover:text-neutral-200'>
          <DotsVerticalIcon/>
        </button>
      </td>
    </tr>

  )
}

function NavBar(){
  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav className=' border-b border-neutral-700'>
        <div className='lg:hidden flex justify-between items-center p-4'>
            <Dialog.Root open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
              <Dialog.Trigger>
                <NavButton className='border rounded border-neutral-700 p-2'>
                  <HamburgerMenuIcon/>
                </NavButton>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Content
                  className='absolute inset-0 flex flex-col text-neutral-200'
                >
                  <div className='flex justify-between items-center p-6 border-b border-neutral-700 bg-neutral-900'>
                    <div className='flex items-center gap-4 justify-start'>
                      <Avatar.Root className='flex items-center justify-center bg-blue-700 rounded-full w-10 h-10'>
                        <Avatar.Image
                        />
                        <Avatar.AvatarFallback>
                        </Avatar.AvatarFallback>
                      </Avatar.Root>
                      <span>IKAKO.T</span>
                    </div>
                    <NavButton 
                      className='border rounded border-neutral-700 p-2'
                      onClick={() => setIsOpen(prev => !prev)}
                    >
                      <Cross1Icon/>
                    </NavButton>
                  </div>
                  <SideNav/>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
            <NavButton>
              <MagnifyingGlassIcon/>
            </NavButton>
            <WithNotificationDot active>
              <NavButton>
                <BellIcon/>
              </NavButton>
            </WithNotificationDot>
        </div>
        <div className='hidden lg:flex items-center p-4'>
          <NavButton 
            className='border rounded border-neutral-700 p-2'
          >
            <ChevronLeftIcon/>
          </NavButton>
          <fieldset className='ml-auto mr-10 flex items-center gap-4'>
            <NavButton>
              <MagnifyingGlassIcon/>
            </NavButton>
            <input 
              type="text" 
              placeholder='What you wish?'
              className='bg-transparent outline-none text-xs h-10'
            />
          </fieldset>
          <WithNotificationDot active>
            <NavButton>
              <BellIcon/>
            </NavButton>
          </WithNotificationDot>
          <Avatar.Root className='flex items-center ml-4 justify-center bg-blue-700 rounded-full w-10 h-10'>
            <Avatar.Image
            />
            <Avatar.AvatarFallback>
            </Avatar.AvatarFallback>
          </Avatar.Root>
        </div>
      </nav>
  )
}

function SideNav(){
  return (
    <div className='flex-1 w-4/5 lg:w-full bg-neutral-900 pl-6'>
      <nav>
        <ul className='flex flex-col items-start'>
          <SideNavMenuItem>
            <span>
              <HomeIcon/>
            </span>
            Home
          </SideNavMenuItem>
          <SideNavMenuItem>
            <span>
              <ActivityLogIcon/>
            </span>
            Recently Played
          </SideNavMenuItem>
          <SideNavMenuItem>
            <span>
              <PlayIcon/>
            </span>
            Collections
          </SideNavMenuItem>
          <SideNavMenuItem>
            <span>
              <RowsIcon/>
            </span>
            Playlist
          </SideNavMenuItem>
          <SideNavMenuItem>
            <span>
              <DashboardIcon/>
            </span>
            Subscriptions
          </SideNavMenuItem>
          <SideNavMenuItem>
            <span>
              <PlusIcon/>
            </span>
            Create Playlist
          </SideNavMenuItem>
          <SideNavMenuItem>
            <span>
              <ColorWheelIcon/>
            </span>
            My Fruits
          </SideNavMenuItem>
        </ul>
      </nav>
      <Seperator.Root
        decorative
        orientation='horizontal'
        className='h-[1px] bg-neutral-700 w-3/4 my-10'
      />
      <div>
        <h2
          className='text-neutral-300 text-sm px-4 mt-6 mb-6'
        >
          My Playlist #1
        </h2>
        <ul className='flex flex-col items-start gap-4'>
          <li className='text-neutral-500 text-sm px-4 transition hover:text-neutral-300 lg:text-xs'>Christmas Tracks</li>
          <li className='text-neutral-500 text-sm px-4 transition hover:text-neutral-300 lg:text-xs'>Other Remix</li>
          <li className='text-neutral-500 text-sm px-4 transition hover:text-neutral-300 lg:text-xs'>Release Radar</li>
          <li className='text-neutral-500 text-sm px-4 transition hover:text-neutral-300 lg:text-xs'>Favourites N.</li>
        </ul>
      </div>
    </div>
  );
}

function SideNavMenuItem({
  children
}:{
  children: ReactNode
}){
  return (
    <li className={
      `hover:bg-neutral-800 transition flex justify-start gap-4 items-center text-sm text-neutral-500 w-4/5 my-2 px-4 py-2 rounded-sm
      cursor-pointer hover:text-neutral-300 lg:hover:bg-neutral-950 lg:text-xs lg:my-1
      `
    }>
      { children }
    </li>
  )
}

function NavButton({
  children,
  className,
  onClick
}:{
  children: ReactNode, 
  className?: string,
  onClick?: () => void
}){
  return (
    <button className={`${className}`} onClick={onClick}>
      { children }
    </button>
  )
}

function WithNotificationDot({children, active}:{children: ReactNode, active: boolean}){
  return (
    <div className='relative'>
      {active && (
        <div
          className='absolute top-0 right-0 w-1 h-1 translate-x-[2px] -translate-y-[2px] bg-red-500 rounded-full'
        />
      )}
      {children}
    </div>
  )
}


export default App
