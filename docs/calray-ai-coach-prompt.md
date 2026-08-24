# CalRay AI Coach Prompt

This file is the drop-in structure for the CalRay AI fitness coach.

## Recommended Flow

- Use the system prompt from `src/ai/calrayCoachPrompt.js`.
- Send the user's profile with every request.
- Include 2-3 few-shot examples before live conversation history.
- Keep the last 5 chat messages for memory.
- Add exercise database results before the user question when the app has matching exercise data.
- Keep the API key and model call on the backend, not inside the public React app.

## Message Structure

```js
import {
  CALRAY_AI_MODELS,
  buildCalrayCoachMessages,
} from "./src/ai/calrayCoachPrompt.js";

const messages = buildCalrayCoachMessages({
  userInput,
  userProfile: {
    goal: "Muscle Gain",
    weight: "58kg",
    level: "Beginner",
  },
  history: lastMessages,
});

const response = await openai.responses.create({
  model: CALRAY_AI_MODELS.costOptimized,
  input: messages,
});
```

## Preset Buttons

- Chest workout
- Fat loss plan
- Diet plan

## Hybrid AI Upgrade

For stronger answers, combine:

- AI prompt for coaching style.
- Exercise database for exact muscles, equipment, and form cues.
- Logic layer for user goal, level, training days, and progression.

Example database context:

```txt
Exercise Database Match:
- Exercise: Push-up
- Primary muscles: Chest, triceps, anterior deltoids
- Secondary muscles: Core, serratus anterior
- Equipment: Bodyweight
- Beginner regression: Incline push-up
```

Place that context before the user question so CalRay answers with verified app data plus AI coaching.
