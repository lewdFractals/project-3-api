# Project 3: Group Project

Live application: https://lewdfractals.github.io/project-3-client/

Front-end repository: https://github.com/lewdFractals/project-3-client

## About

Typewritter is an application for users to create a blogs and the supporting pages for their blog.
The supporting pages can be an about me, contact me etc. 

## API end-points

| Verb   | URI Pattern            | Controller#Action     |
| ----   | -----------            | -----------------     |
| POST   | `/sign-up`             | `users#signup`        |
| POST   | `/sign-in`             | `users#signin`        |
| DELETE | `/sign-out/:id`        | `users#signout`       |
| PATCH  | `/change-password/:id` | `users#changepw`      |
| GET    | `/blogs`               | `blogs#index`         |
| POST   | `/blogs`               | `blogs#create`        |
| PATCH  | `/blogs/:id`           | `blogs#update`        |
| DELETE | `/blogs/:id`           | `blogs#destroy`       |
| GET    | `/myblogs`             | `myblog#index`        |
| GET    | `/pages`               | `pages#index`         |
| POST   | `/pages`               | `pages#create`        |
| PATCH  | `/pages/:id`           | `pages#update`        |
| DELETE | `/pages/:id`           | `pages#destroy`       |
| GET    | `/pages/:id`           | `singlepage#index`    |

All data returned from API actions is formatted as JSON.
