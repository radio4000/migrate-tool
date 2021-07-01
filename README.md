# radio4000-cms

React app to manage [radio4000.com](https://radio4000.com) data connected to a [supabase](https://supabase.io/) database/auth.

## How to develop

Steps to successfully start developping on this project.

### Pre-requisites
1. Have [node (nvm)](https://github.com/nvm-sh/nvm) installed on your system
1. git clone this repository
1. create an account on [app.supabase.io](https://app.supabase.io),
   and a new project that will be initialized with a new postgresql database

### Initialize the supabase sql database

In order to have the database ready to work with the radio4000-cms, we
need to initialize it, so it creates to correct tables and
policy/security rules.

1. login to [app.supabase.io](https://app.supabase.io)
1. go to the `> sql` page to write a new sql query
1. copy the content from the file `./sql/init.sql/`, and run it on
   supabase (in the page from the step above)
1. if it worked, it should return no error to the query; the database
   is initialized

### Retrieve the supabase keys as environment variables

In order for the project to connect correctly to the supabase database:

1. login to [app.supabase.io](https://app.supabase.io)
1. go to the page `> Settings > API`
1. find the values of the configuration for the keys: `config.URL` and `API_keys.anon_key`
1. copy the file (at the root of this project) `.env.example` to
   `.env`, and insert the correct values for the listed environment
   variables

### Local development server:
1. Run `npm install`, to install all packages the project depends on
1. Run `npm start`, to start the local development server

> Note: don't forget to initialize the database table, and update the `.env` file with the correct values (read the docs above).

## Documentation

- Supabase: [docs](https://supabase.io/docs) & [javascript client](https://supabase.io/docs/reference/javascript/supabase-client)
- React.js: [docs](https://reactjs.org/docs/getting-started.html)
