## 1 - Dashboard

## 2 - Sessions Feature

### Schema:

Each user will have multiple study sessions
Each study session should have:

- id
- userId
- createdAt
- date
- startTime
- endTime
- breakTime
- scheduledForLater
- scheduledHours
- notifyBefore
- notifyTimer
- tags (global tags feature for todos, notes, session or separate tags for each component)

- for later:
  - Add sceduled session to Google calender
  - Add functionality to check whether student is actually doing a session (like a checkmark point for ringing bell or something). Not sure about this functionality

Each session will be calculated using startTime, endTime and breakTime

Add feature of invite friends to study. Make closed group feature for focused studying.

## Bugs and Fixes

#### 1 - next-auth: trying to turn emailVerified of social-sign account to true from inside the signIn callback

##### Problem

##### Explanation

- `callbacks` is executed when the user has made a signIn request and has the provider check is complete. `signIn()` inside `callbacks` options can be used to further ensure some checks if need be.

- This is not the correct place to imlement side effects (such as modifying some values of a model). Though some of those operatioins can be implemented in the callback but a better place for such side-effects related implementations is `events` option configuration in Nextauth()

##### Solution

- Inside `events`, we can use `linkAccount()` to update user info for only those users who have an Account, meaning that they have used social sign-on to sign in

```js
const authHandler = NextAuth({
  // all other config,
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      // if account.provider !== "credentials"
      // then alllow user to signIn
      // for users that have signIn using credentials
      // return false, meaning restrict signing in if their email is not verified
    },
  },
});
```

#### 2 - useEfect log statement followed by clean up log statement followed by useEffect log statement

##### Problem

- useEffect log + clean up function log + same useEffect log

- Couldn't understand why the "same useEffect log" was followed by the clean up log. Plus, why the clean up log in the first place when the mount just mounted. Till this point, I only knew that the clean up function inside useEffect only runs when the component unmounts

##### Explanation

- Clean up function, i.e. `return () => {}` inside useEffect is executed in two scenarios:

  - when the component unmounts
  - before the useEffect is about to run again becuase due to any change in the state of variables inside the dependency array.

- `<React.StrictMode>` was the core reason for those two logs:

  - Strict mode is mechanism offered by React to check for inconsistencies when running life cycle methods/hooks such as useEffect. It ensures that there are no inconsistencies when the component mounts and the useEffect is executed. For that it executes the useEffect once again (just to check, that too only in dev mode).
  - Since useEffect runs again, the cleanup function is ran before it. Hence that log makes sense.

##### Solution

- Understand the behavior of useEffect and don't worry about the logs as long as they are consistent or just remove `<React.StrictMode>`

#### 3 - `<Dialog>` component open and onOpenChange props

##### Problem

- How to open and close the `<Dialog>` component offered by Shadcn based on a local/global state variable

##### Explanation

- The `<Dialog>` component comes with a child component that triggers the dialog. It's easy to open the dialog as that logic is offered by Shadcn and is already present in the component.

- My earlier solution was to add props to this `<Dialog>` component and pass these prop values from a parent component which uses this dialog component as its child. But that would require us to tinker the original code in dialog component, which can be done but can get fairly complex becuase this component is built on top off another component from another library. Hence, we might have to prop drill.

##### Solution

- Use `open` and `onOpenChange` props that are already present in the `<Dlalog>` component

- `open` prop takes in a boolean based on which the dialog component will open and close. Hence, we can open and close this dialog based on any local/global state varible.

- `onOpenChange` prop takes in a callback function that encapsulates the logic of what happens when the dialog's `open` prop's value changes. This callback can be used to reset some state that was local to the dialog component or something else.

#### 4 - Dates send from frontend fail zod.date() validation

##### Problem

- Variables (such as startDate) whose values was a `Date` object, when send from frontend to the backend, fail the zod.date() validation

##### Explanation

- Sending information from frontend to backend in the request body, generally requires to use `JSON.stringify()` which converts native js objects to json.

- In the backend, extracting these information from the body, requires to use `req.json()`, which parses the json to native js object, in which values of each property are converted to string. Hence, the startDate value is not a Date but a string. That's why zod.date() fails.

##### Solution

- In the backend, create new variables using the startTime value (which is string) and update the body's value of startTime to this new variable that is a native Date object

```js
// rest of the code

const body = await req.json();
const start = new Date(startTime);

const newBody = {
  ...body,
  startTime: start,
};

const validatedFields = ZodSchema.safeParse(newBody);
```

#### 5 - Select and capture a value of a div/component from a bunch of divs/components

##### Problem

##### Explanation

##### Solution

#### 6 - How to send a query param from frontend and access that param in the backend in Nextjs

##### Problem

- Unable to figure out how to add a query param to the url frontend and access it on the backend

##### Explanation

- In a non-Nextjs app, this can be done in two steps:

  - In the frontend, we might use React and react-router-dom. When using React router, we create routes which have their routing mapped to specific components and page. There these dynamic params can easily be incorporated in the route and then access that dyanmic param value in any component using `useParams()` hook
  - In a nodejs backend, we can access these dyanmic params using `req.params` or `req.query`

- In nextjs, similar this can be achieved using `useSearchParams()`

##### Solution

```js
// page.jsx

import { useSearchParams } from "next/navigation";

export const Component = () => {
  const searchParams = useSearchParams();

  const blogId = searchParams.get("blogId");

  // if no id, you can add this id conditionally whose value you can pass from a state variable also.

  return <div></div>;
};
```

```js
// route.js

export default async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const blogId = searchParams.get("blogId");
}
```

#### 7 - Filter records by date in Prisma

##### Problem

- Not able to figure out how to filter/get records using values that are `Date` inside Prisma.
- Suppose, I want to get all my transactions of 18/05/23. But dates are not that simple to work with. They have time component, as well as can belong to different timezone. Plus the Prisma date format can be different to your application date object

##### Explanation

- In order to filter/get records that match a particular date, first add the any arrtibute to the model that captures the date of its creation.

- Let's say, our frontend made a request to get all transactions made on 18/05/23, which would be sent in the request body/params as a native stirng representing a date like "Sat May 18 2024 15:57:28 GMT+0530 (India Standard Time)" or "2024-05-18T10:27:28.187Z" (mostly this one).

- We need to consider the time component of this date and extract two dates from this "2024-05-18T10:27:28.187Z", one having time that represents the start of the day and another having time that represents the end of the day.

- Then we can use these two new dates as a range to query the Prisma db using the createdAt attribute and it's `gte` and `lt` properties

##### Solution

```js
// route.ts

export default async function GET(req) {
  // let say, we have extracted the date and have converted to the necessary format the zod validation has passed. The variable is called "date"

  // using the same date to create another date marking the start of that day
  let start = new Date(date);
  start.setUTCHours(0, 0, 0, 0);

  let end = new Date(date);
  end.setUTCHours(0, 0, 0, 0);

  const blogs = await db.blog.findMany({
    where: {
      userId,
      createdAt: {
        gte: start,
        lt: end,
      },
    },
  });
}
```

#### 8 - useQuery() making infinite requests when updating searchParams

##### Problem

##### Explanation

##### Solution

#### 9 - How to pass an argument to the fetch function inside useQuery()

##### Problem

##### Explanation

##### Solution

#### 10 - Working with Date object, calculating differences and handling edge cases

##### Problem

##### Explanation

##### Solution

#### 11 -

##### Problem

##### Explanation

##### Solution
