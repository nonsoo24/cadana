<template>
  <button
    data-drawer-target="cta-button-sidebar"
    data-drawer-toggle="cta-button-sidebar"
    aria-controls="cta-button-sidebar"
    type="button"
    className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span className="sr-only">Open sidebar</span>

  </button>

  <aside
    className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r border-grey-0 "
    aria-label="Sidebar"
  >
    <div
      className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800"
    >
      <ul className="space-y-2">
        <li>
          <router-link
            to="/"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <figure className="cursor-pointer mt-5">
              <!-- <Image
                src={CimplaLogo}
                alt="cimpla-logo"
                width={154.63}
                height={48}
              /> -->
            </figure>
          </router-link>
        </li>
        <li>
          <router-link
            to="/"
            class="flex items-center p-2 text-text2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <!-- <AppsRectangle className=" w-5 h-5" /> -->
            <span class="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/invoices"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <!-- <UsersTriple className="w-5 h-5" /> -->
            <span class="flex-1 ms-3 whitespace-nowrap"> Invoices </span>
        </router-link>
        </li>
        <li>
          <router-link
            to="/my-wallets"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
           <DropDown />
            <span className="flex-1 ms-3 whitespace-nowrap"> My Wallets </span>
          </router-link>
        </li>
      </ul>

      <div className="absolute bottom-16">
        <div className="w-[210px]">
          <div className="border-t border-grey-200 mb-10 w-auto " />
          <p className="text-grey-30 text-h11 mb-3">Customization</p>
          <p className="text-grey-30 text-h11 mb-3">Logout</p>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import DropDown from '../../assets/icons/dropdown.svg'
export default {
  name: "SideNavbar",
  components:{DropDown},
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
