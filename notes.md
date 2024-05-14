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
