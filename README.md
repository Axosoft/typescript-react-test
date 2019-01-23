This repo investigates how to type our reducers, actions, thunks and action creators, mapstate and mapdispatch functions, etc. I've created it to solicit feedback before work on the new account site begins, but it is not in any way meant to be authoritative. While it will act as a guide, actual implementation may differ moving forward with no expectation that this repo be updated to match.

I left all the default tsconfigs alone from create-react-app. I'm assuming we'll want to look into changing them. I also have no idea if this code splits or what browser support it has, so that's further research to do.

The `master` branch is purely for experimenting with typescript. Other branches may be created so we can try out different features we're also evaluating for use on the upcoming account site rewrite. One such branch is the `styled-components` branch, which has been ejected from create-react-app as well.
