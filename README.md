# Work-Day-Scheduler

## Description
A scheduling tool that allows the user to put tasks into hourly time blocks and save them.  When the webpage is recalled the tasked are still shown in the the time blocks until removed.  The time blocks will be color coded to show wether that hour has already past, is current, or has not yet occured.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Usage
When the user opens the application hourly timeblocks will appear with any tasks that were previously saved.

![WebsiteScreenshot](./Assets/Screen%20Shot%202023-01-30%20at%2010.10.28%20PM.png)

##
Deployed Website:
https://jpbaer.github.io/Work-Day-Scheduler/