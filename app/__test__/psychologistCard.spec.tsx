import '@testing-library/jest-dom'
import { findByText, render, screen } from '@testing-library/react'
import PsychologistList from '../components/psychologistList/psychologistList'
import PsychologistCard from '../components/psychologistCard/psychologistCard'
import { PSYCHOLOGIST_MOCK } from '../mocks/psychologist.mock'

describe('<PsychologistCard />', () => {
    it('renders a heading', async () => {
      const component = await PsychologistCard({data: PSYCHOLOGIST_MOCK, information: true});
      const {getByText, findByText } = render(component)

      await findByText('Primeira sessão');

      expect(getByText('Primeira sessão')).toBeInTheDocument();
    })
})