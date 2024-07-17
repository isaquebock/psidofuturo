import '@testing-library/jest-dom'
import { render, fireEvent, getByTestId } from '@testing-library/react'
import Calendar from '../psi/components/calendar/calendar'
import { CALENDAR_LIST_MOCK } from '../mocks/calendar.mock'

describe('<PsychologistCard />',  () => {
    it('should render calendar', async () => {
      const { getByText} = render(<Calendar calendar={CALENDAR_LIST_MOCK} />)

      expect(getByText('Horarios disponiveis')).toBeInTheDocument();
    })

    it('should appear text to preview schedule', async () => {
      const { findByTestId} = render(<Calendar calendar={CALENDAR_LIST_MOCK} />)

      const buttonTime = await findByTestId('button-0-2');
      fireEvent.click(buttonTime);

      const text = await findByTestId('confirm-text');
      expect(text).toBeInTheDocument()
    })

    it('should set a schedule', async () => {
      const { findByTestId, getByTestId } = render(<Calendar calendar={CALENDAR_LIST_MOCK} />)

      const buttonTime = await findByTestId('button-0-2');
      fireEvent.click(buttonTime);

      const confirm = await findByTestId('confirm');
      fireEvent.click(confirm);

      const schedule = await findByTestId('confirmed-schedule');

      expect(schedule).toBeInTheDocument();

    })
})