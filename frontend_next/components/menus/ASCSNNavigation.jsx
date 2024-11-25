import { GetSiteMenu } from "@/actions/GetSiteMenu"

import List from "../List"
import NavigationListItem from "../NavigationListItem"

const ASCSNNavigation = async () => {
    const menu = await GetSiteMenu('ascsn-navigation')
  return (
    <div className='w-full h-[75px] bg-[#004890] text-white'>
      <List>
        {menu.MenuItems.map((item, index) => (
          <NavigationListItem key={index} item={item} />
        ))}
      </List>
    </div>
  )
}

export default ASCSNNavigation