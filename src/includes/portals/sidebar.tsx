import Link from 'next/link'
const Sidebar = () => {
   return (
      <aside className="portalSidebar">
         <div className="portalSidebarList">
            <ul>
                  <li>
                     <Link href="/myDetails" passHref>
                        <a className="myAccounts" title="My Accounts">My Accounts</a>
                     </Link>
                  </li>
                  <li>
                     <Link href="/myEquipments" passHref>
                        <a className="myEquipments" title="My Equipments">My Equipments</a>
                     </Link></li>
                  <li>
                     <Link href="/myAppointments" passHref>
                        <a className="myAppointments" title="My Appointments">My Appointments</a>
                     </Link>
                  </li>
                  <li>
                     <Link href="/myQuotes" passHref>
                        <a className="myQuotes" title="My Quotes">My Quotes</a>
                     </Link>
                  </li>
                  <li>
                     <button className="logOut" title="Log Out">Log Out</button>
                  </li>
            </ul>
         </div>
      </aside>
   )
}

export default Sidebar
