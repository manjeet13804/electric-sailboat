import Link from "next/link";
import {useDispatch} from "react-redux";
import {logout} from "@/store/slices/authSlice";
import NProgress from "nprogress";
import {router} from "next/router";

export default function AdminSidebar() {

  const dispatch = useDispatch();

  async function signOutHandler(e) {
    e.preventDefault();
    NProgress.start();
    await dispatch(logout());
    NProgress.done();
    router.push("/");
	}

  return(
    <div className="vertical-menu">
      <div className="h-100">
        <div className="user-wid text-center py-4">
          <div className="user-img">
            <img src="/images/users/avatar-2.jpg" alt="" className="avatar-md mx-auto rounded-circle" />
          </div>
          <div className="mt-3">
            <a href="" className="text-dark fw-medium font-size-16">Patrick Becker</a>
            <p className="text-body mt-1 mb-0 font-size-13">Admin</p>
          </div>
        </div>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li>
              <Link href="/member" className=" waves-effect">
                <img src="/images/menu-icon/dashboard.svg" alt="icon" className="me-3" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="member/sailboats" className=" waves-effect">
                <img src="/images/menu-icon/boat.svg" alt="icon" className="me-3" />
                <span>Boat Profile</span>
              </Link>
            </li>
            <li>
              <a href="#" className=" waves-effect">
                <img src="/images/menu-icon/group.svg" alt="icon" className="me-3" />
                <span>Groups</span>
              </a>
            </li>
            <li>
              <a href="#" className=" waves-effect">
                <img src="/images/menu-icon/friends.svg" alt="icon" className="me-3" />
                <span>Friends</span>
              </a>
            </li>
            <li>
              <a href="#" className=" waves-effect">
                <img src="/images/menu-icon/favorites.svg" alt="icon" className="me-3" />
                <span>Favorites</span>
              </a>
            </li>
            <li>
              <a href="#" className=" waves-effect">
                <img src="/images/menu-icon/messages.svg" alt="icon" className="me-3" />
                <span>Messages</span>
              </a>
            </li>
            <li>
              <a href="#" className=" waves-effect">
                <img src="/images/menu-icon/activities.svg" alt="icon" className="me-3" />
                <span>Activities</span>
              </a>
            </li>
            <li>
              <Link href="/" className=" waves-effect" onClick={signOutHandler}>
                <img src="/images/menu-icon/logout.svg" alt="icon" className="me-3" />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div> 
    );
}