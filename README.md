# React + Vite + Tailwind.css

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
This is a Sample Dynamic LeaderBoard(Responsive) Webpage which consist of previous points obtained by the Participant and the current points scored by them. By comparing the points we can determine whether the Player points are increased or decreased . These are shown by green and red arrows.
Using the Mapfunctions they points are sorted and arranged in the Decreasing way.
The common array is in the Wmain.jsx where the array gets sorted and slice them into first 3 members who scored maximum points and rest of all members.
The first 3 Members are sent to Topscorer.jsx to Highlight them with profile image and the Rest of all sent to Otherscorer.jsx where they are arranged in a grid way.
