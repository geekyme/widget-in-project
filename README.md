This project is a POC to show how to import a widget with its assets

1. `git clone`

2. `cd fakeloader; npm install; npm run build; npm link;`

3. `cd nextjs-starter; npm install; npm link fakeloader; npm run dev;`

4. Visit browser at `http://localhost:3000`. Widget's assets like svg will point to the widget file server. Widget will also automatically load its own css.
