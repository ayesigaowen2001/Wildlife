import { Menubar } from "primereact/menubar";
import ToolBar from "../Toolbar";

export default function Navbar() {
  const Heading = [
    <h4 className="flex justify-content-start">Wild Life Tracking System</h4>,
  ];
  const items = [
    { Heading },

    {
      label: "Home",
      icon: "pi pi-home",
    },

    // {
    //   label: "Projects",
    //   icon: "pi pi-search",
    //   items: [
    //     {
    //       label: "Components",
    //       icon: "pi pi-bolt",
    //     },
    //     {
    //       label: "Blocks",
    //       icon: "pi pi-server",
    //     },
    //     {
    //       label: "UI Kit",
    //       icon: "pi pi-pencil",
    //     },
    //     // {
    //     //   label: "Templates",
    //     //   icon: "pi pi-palette",
    //     //   items: [
    //     //     {
    //     //       label: "Apollo",
    //     //       icon: "pi pi-palette",
    //     //     },
    //     //     {
    //     //       label: "Ultima",
    //     //       icon: "pi pi-palette",
    //     //     },
    //     //   ],
    //     // },
    //   ],
    // },
    {
      label: "Contact",
      icon: "pi pi-envelope",
    },
    {
      label: "Logout",
      icon: "pi pi-power-off",
    },
  ];

  return (
    <div className="card ">
      <div>
        <Menubar
          className="flex justify-content-end "
          model={items}
          start={
            <>
              <ToolBar />
            </>
          }
        ></Menubar>
      </div>
    </div>
  );
}
