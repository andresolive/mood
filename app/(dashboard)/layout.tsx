import { UserButton } from '@clerk/nextjs'

const DashboardLayout = ({ children }) => {
  return (
    <div className="relative h-screen w-screen">
      <aside className="absolute left-0 top-0 h-full w-[600px] border-r border-black/10">
        Mood
      </aside>
      <div className="ml-[200px]">
        <header className="h-[60px] border-b border-black/10">
          <div className="flex h-full w-full items-center justify-end px-6">
            <UserButton />
          </div>
        </header>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
