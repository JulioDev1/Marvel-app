import { Page, Pages } from "./styled";

const MAX_COUNT = 5;
const MAX_LEFT = (MAX_COUNT - 1) / 2;
export const Pagination = ({ limit, total, offset, setOffset }) => {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);
  return (
    <div>
      <Pages>
        {Array.from({ length: MAX_COUNT })
          .map((_, index) => index + first)
          .map((page) => (
            <Page onClick={() => setOffset((pages - 1) * limit)}>
              <li></li>
            </Page>
          ))}
      </Pages>
    </div>
  );
};
