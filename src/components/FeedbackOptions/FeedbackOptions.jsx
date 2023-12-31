import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback })  {
  return (
    <div className={s.options}>
      <button
        className={s.options_button}
        onClick={() => onLeaveFeedback('good')}
      >
        Good
      </button>
      <button
        className={s.options_button}
        onClick={() => onLeaveFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        className={s.options_button}
        onClick={() => onLeaveFeedback('bad')}
      >
        Bad
      </button>
    </div>
  );
};
