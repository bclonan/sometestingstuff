<template>
  <!-- Side icon menu -->
  <ul>
    <li class="main-logo">
      <router-link to="/main"></router-link>
    </li>
    <li v-for="item in NavItems" 
      :key="item.id"
      :class="[activeNavItem === item.name ? 'is-active' : '', extraClassItems]"
      @click="setActive(item.name)"
      >
      <i v-if="item.buttontype === 'route'" :class="item.icon" @click="navigateToRoute(item.to)"></i>
      <i v-else-if="item.buttontype === 'submenu'" :class="item.icon" @click="subMenu(item.SubMenu)"></i>
      <i v-else :class="item.icon"></i>
    </li>
  </ul>
  <!-- /Side icon menu -->
</template>

<script>
  import { NavBarMixin } from "@/components/Main/mixins/NavBarMixin.js";
  export default {
    name: "IconMenu",
    mixins: [NavBarMixin],
    data() {
      return {
        extraClassItems: "side-icon",
        NavItems: [
          //name = tool name icon = icon for sidebar , menuname = prop to call for inner component
          {
            name: "creation",
            icon: "sl sl-icon-action-redo",
            menuName: "",
            buttontype: "submenu",
            to: "",
            tag: "i",
            SubMenu: [
              {
                name: "Funnels",
                icon: "important_devices",
                to: "",
                liType: "have-children",
                toggleMenu: true,
                subMenus: [
                  {
                    name: "Funnels",
                    to: "/funnels"
                  },
                  {
                    name: "Templates",
                    to: "/ftemplates"
                  },
                  {
                    name: "Market Place",
                    to: "/assets"
                  }
                ]
              },
              /*{
                      name: "Ads",
                      icon: "photo_size_select_large",
                      liType: "have-children",
                      to: "/assets",
                      toggleMenu: true,
                      subMenus: [
                        {
                          name: "Templates",
                          to: "/assets"
                        },
                        {
                          name: "Create New",
                          to: "/assets"
                        },
                        {
                          name: "Your Funnels",
                          to: "/assets"
                        },
                        {
                          name: "Market Place",
                          to: "/assets"
                        }
                      ]
                    },*/
              {
                name: "Bots",
                icon: "insert_emoticon",
                liType: "have-children",
                to: "",
                toggleMenu: true,
                subMenus: [
                  {
                    name: "Create New",
                    to: "/botbuilder"
                  },
                  {
                    name: "Your Bots",
                    to: "/botlist"
                  },
                  {
                    name: "Templates",
                    to: "/bottemplates"
                  },
                  {
                    name: "Market Place",
                    to: "/assets"
                  }
                ]
              },
              {
                name: "Story Builder",
                icon: "screen_share",
                liType: "have-children",
                to: "",
                toggleMenu: true,
                subMenus: [
                  {
                    name: "New Form",
                    to: "/leadforms"
                  },
                  {
                    name: "Your Stories",
                    to: "/leadformlist"
                  },
                  {
                    name: "Templates",
                    to: "/leadformtemplates"
                  },
                  {
                    name: "Market Place",
                    to: "/assets"
                  }
                ]
              },
              {
                name: "Leads Widgets",
                icon: "web",
                liType: "have-children",
                to: "",
                toggleMenu: true,
                subMenus: [
                  {
                    name: "Create New",
                    to: "/widgets"
                  },
                  {
                    name: "Your Widgets",
                    to: "/userwidgets"
                  },
                  {
                    name: "Market Place",
                    to: "/assets"
                  }
                ]
              },
              {
                name: "Courses",
                icon: "insert_emoticon",
                liType: "have-children",
                to: "",
                toggleMenu: true,
                subMenus: [
                  {
                    name: "Courses",
                    to: "/courses"
                  },
                  {
                    name: "New Course",
                    to: "/cbuilder"
                  },
                  {
                    name: "Templates",
                    to: "/ctemplates"
                  },
                  {
                    name: "Market Place",
                    to: "/assets"
                  }
                ]
              },
              {
                name: "Proposals",
                icon: "insert_emoticon",
                liType: "have-children",
                to: "",
                toggleMenu: true,
                subMenus: [
                  {
                    name: "Proposals",
                    to: "/proposal"
                  },
                  {
                    name: "New Proposal",
                    to: "/pbuilder"
                  },
                  {
                    name: "Templates",
                    to: "/ptemplates"
                  },
                  {
                    name: "Market Place",
                    to: "/assets"
                  }
                ]
              },
            ]
          },
          {
            name: "collaborate",
            icon: "sl sl-icon-people",
            menuName: "",
            buttontype: "submenu",
            to: "",
            tag: "i",
            SubMenu: [
              {
                name: "Collaboration",
                icon: "important_devices",
                to: "",
                liType: "have-children",
                toggleMenu: true,
                subMenus: [
                  {
                    name: "Create Team",
                    to: "/collaborate"
                  },
                  {
                    name: "Your Teams",
                    to: "/collaborateteam"
                  }
                ]
              }
            ]
          },
          {
            name: "Integrations",
            icon: "sl sl-icon-star",
            menuName: "",
            buttontype: "submenu",
            to: "",
            tag: "i",
            SubMenu: [
              {
                name: "Integrations",
                icon: "merge_type",
                to: "",
                liType: "have-children",
                toggleMenu: true,
                subMenus: [
                  {
                    name: "New Integration",
                    to: "/integrations"
                  },
                  {
                    name: "Manage Integrations",
                    to: "/manageintegrations"
                  }
                ]
              }
            ]
          },
          {
            name: "assets",
            icon: "sl sl-icon-folder-alt",
            menuName: "",
            buttontype: "route",
            to: "/assets",
            tag: "i"
          },
          {
            name: "tasks",
            icon: "sl sl-icon-note",
            menuName: "",
            buttontype: "route",
            to: "/tasks",
            tag: "i"
          }
        ]
      };
    },
    methods: {
      subMenu(i) {
        let submenuArray = i;
        if (!this.sidebarStoreMenu) {
          this.$store.commit("mainPushMenu/togglePushMenu", submenuArray);
          return;
        } else {
          this.$store.commit("mainPushMenu/changePushMenu", submenuArray);
          return;
        }
        return;
      },
      navigateToRoute(p) {
        this.$store.commit("mainPushMenu/resetPushMenu");
        this.$router.push(p);
        return;
      }
    },
    computed: {
      sidebarStoreMenu() {
        return this.$store.getters["mainPushMenu/showPushMenu"];
      }
    }
  };
</script>

<style scoped>
</style>