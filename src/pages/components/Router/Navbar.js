import { useTheme as useNextTheme } from "next-themes";
import { Button, Switch, useTheme } from "@nextui-org/react";
import { Navbar, Text, Avatar, Dropdown } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import Link from "next/link.js";

export const ThemeSwitch = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <Switch
      className=""
      size={"sm"}
      checked={isDark}
      onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
    />
  );
};

const NavbarComponent = () => {
  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  const navigationsPid = [
    { name: "home", href: "/", active: false },
    { name: "Contact", href: "/", active: false },
    { name: "About", href: "/", active: false },
  
  ];
  return (
    <>
      <Layout>
        <Navbar isBordered variant="sticky">
          <Navbar.Toggle showIn="xs" />
          <Navbar.Brand
            css={{
              "@xs": {
                w: "12%",
              },
            }}
          >
            Logo Area Bitch!
          </Navbar.Brand>
          <Navbar.Content
            enableCursorHighlight
            activeColor="warning"
            hideIn="xs"
            variant="highlight"
          >
            {navigationsPid &&
              navigationsPid.map((item) => {
                return (
                  <Link href={item.href} {...item}>
                    <Text h6>{item.name}</Text>
                  </Link>
                );
              })}
          </Navbar.Content>
          <Navbar.Content
            css={{
              "@xs": {
                w: "12%",
                jc: "flex-end",
              },
            }}
          >
            <ThemeSwitch />
            <Dropdown placement="bottom-right">
              <Navbar.Item>
                <Dropdown.Trigger>
                  <Avatar
                    bordered
                    as="button"
                    color="warning"
                    size="md"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                </Dropdown.Trigger>
              </Navbar.Item>
              <Dropdown.Menu
                aria-label="User menu actions"
                color="warning"
                onAction={(actionKey) => console.log({ actionKey })}
              >
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    Signed in as
                  </Text>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    zoey@example.com
                  </Text>
                </Dropdown.Item>
                <Dropdown.Item key="settings" withDivider>
                  My Settings
                </Dropdown.Item>
                <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
                <Dropdown.Item key="analytics" withDivider>
                  Analytics
                </Dropdown.Item>
                <Dropdown.Item key="system">System</Dropdown.Item>
                <Dropdown.Item key="configurations">
                  Configurations
                </Dropdown.Item>
                <Dropdown.Item key="help_and_feedback" withDivider>
                  Help & Feedback
                </Dropdown.Item>
                <Dropdown.Item key="logout" withDivider color="error">
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Content>
          <Navbar.Collapse disableAnimation>
            {collapseItems.map((item, index) => (
              <Navbar.CollapseItem
                key={item}
                activeColor="warning"
                css={{
                  color: index === collapseItems.length - 1 ? "$error" : "",
                }}
                isActive={index === 2}
              >
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  href="#"
                >
                  {item}
                </Link>
              </Navbar.CollapseItem>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </Layout>
    </>
  );
};
export default NavbarComponent;
