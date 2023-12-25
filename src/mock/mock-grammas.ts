import { IGrammaForm } from "../types.ts";
import { QuestionType } from "../const.ts";

export const MockGrammas: IGrammaForm[] = [
  {
    id: 1,
    title: "Тест по теме 'Создание опросов'",
    dateFrom: "2023-11-16T04:25:03+05:00",
    dateTo: "2023-12-30T04:25:03+05:00",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium risus quam, sit amet imperdiet lorem iaculis vel. Vivamus ut erat magna. Nullam maximus dignissim mauris sed sollicitudin. In suscipit, mauris vitae iaculis lacinia, orci ipsum blandit urna, gravida sodales tellus augue in leo. Proin fermentum sed nulla vel posuere.",
    questions: [
      {
        id: 0,
        title: "1 вопрос",
        type: QuestionType.Text,
        isRequired: true,
        options: null,
      },
      {
        id: 1,
        title: "2 вопрос",
        type: QuestionType.Radio,
        isRequired: true,
        options: ["1 вариант", "2 вариант", "3 вариант"],
      },
      {
        id: 3,
        title: "3 вопрос",
        type: QuestionType.Checkbox,
        isRequired: false,
        options: ["1 вариант", "2 вариант", "3 вариант"],
      },
      {
        id: 4,
        title: "4 вопрос",
        type: QuestionType.Scale,
        isRequired: true,
        options: { from: 0, to: 100, step: 10 },
      },
    ],
  },
  {
    id: 2,
    title: "Предпочтения в автомобилях",
    dateFrom: "2023-11-16T04:25:03+05:00",
    dateTo: "2023-12-30T04:25:03+05:00",
    description:
      "Pellentesque tempus tellus eget libero auctor accumsan. Pellentesque ut sapien vel mauris laoreet vulputate bibendum eu massa. Mauris at tempus tortor. Fusce ut sapien imperdiet eros consequat consectetur et a velit",
    questions: [
      {
        id: 0,
        title: "1 вопрос",
        type: QuestionType.Text,
        isRequired: true,
        options: null,
      },
      {
        id: 1,
        title: "2 вопрос",
        type: QuestionType.Radio,
        isRequired: true,
        options: ["1 вариант", "2 вариант", "3 вариант"],
      },
      {
        id: 3,
        title: "3 вопрос",
        type: QuestionType.Checkbox,
        isRequired: false,
        options: ["1 вариант", "2 вариант", "3 вариант"],
      },
      {
        id: 4,
        title: "4 вопрос",
        type: QuestionType.Scale,
        isRequired: true,
        options: { from: 0, to: 100, step: 10 },
      },
    ],
  },
  {
    id: 3,
    title: "Лучший квас",
    dateFrom: "2023-11-16T04:25:03+05:00",
    dateTo: "2023-12-30T04:25:03+05:00",
    description:
      "Pellentesque tempus tellus eget libero auctor accumsan. Pellentesque ut sapien vel mauris laoreet vulputate bibendum eu massa. Mauris at tempus tortor. Fusce ut sapien imperdiet eros consequat consectetur et a velit",
    questions: [
      {
        id: 0,
        title: "1 вопрос",
        type: QuestionType.Text,
        isRequired: true,
        options: null,
      },
      {
        id: 1,
        title: "2 вопрос",
        type: QuestionType.Radio,
        isRequired: true,
        options: ["1 вариант", "2 вариант", "3 вариант"],
      },
      {
        id: 3,
        title: "3 вопрос",
        type: QuestionType.Checkbox,
        isRequired: false,
        options: ["1 вариант", "2 вариант", "3 вариант"],
      },
      {
        id: 4,
        title: "4 вопрос",
        type: QuestionType.Scale,
        isRequired: true,
        options: { from: 0, to: 100, step: 10 },
      },
    ],
  },
  {
    id: 4,
    title: "Как вы проводите свое время",
    dateFrom: "2023-11-16T04:25:03+05:00",
    dateTo: "2023-12-30T04:25:03+05:00",
    description:
      "Duis porttitor posuere lorem at condimentum. Integer porttitor condimentum erat vel mattis. Ut id tellus et sem iaculis gravida. Aliquam aliquam feugiat tempus. Quisque sodales magna at ex elementum, a volutpat lacus efficitur. Morbi arcu sem, vestibulum in enim ac, blandit ultrices nisi. Nam scelerisque leo a accumsan commodo.",
    questions: [
      {
        id: 0,
        title: "1 вопрос",
        type: QuestionType.Text,
        isRequired: true,
        options: null,
      },
      {
        id: 1,
        title: "2 вопрос",
        type: QuestionType.Radio,
        isRequired: true,
        options: ["1 вариант", "2 вариант", "3 вариант"],
      },
      {
        id: 3,
        title: "3 вопрос",
        type: QuestionType.Checkbox,
        isRequired: false,
        options: ["1 вариант", "2 вариант", "3 вариант"],
      },
      {
        id: 4,
        title: "4 вопрос",
        type: QuestionType.Scale,
        isRequired: true,
        options: { from: 0, to: 100, step: 10 },
      },
    ],
  },
  {
    id: 5,
    title: "Счастье - это ...",
    dateFrom: "2023-11-16T04:25:03+05:00",
    dateTo: "2023-12-30T04:25:03+05:00",
    description:
      "Vivamus sed felis ac magna vehicula ullamcorper. Praesent nec urna sit amet ante sollicitudin finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas at finibus purus. Aliquam erat volutpat. Quisque eu dui sed nibh imperdiet vehicula. Sed sed condimentum turpis, auctor mattis sem.",
    questions: [
      {
        id: 0,
        title: "1 вопрос",
        type: QuestionType.Text,
        isRequired: true,
        options: null,
      },
      {
        id: 1,
        title: "2 вопрос",
        type: QuestionType.Radio,
        isRequired: true,
        options: ["1 вариант", "2 вариант", "3 вариант"],
      },
      {
        id: 3,
        title: "3 вопрос",
        type: QuestionType.Checkbox,
        isRequired: false,
        options: ["1 вариант", "2 вариант", "3 вариант"],
      },
      {
        id: 4,
        title: "4 вопрос",
        type: QuestionType.Scale,
        isRequired: true,
        options: { from: 0, to: 100, step: 10 },
      },
    ],
  },
];
