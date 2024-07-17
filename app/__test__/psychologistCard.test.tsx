import '@testing-library/jest-dom'
import { render, fireEvent, waitFor } from '@testing-library/react'

import PsychologistCard from '../components/psychologistCard/psychologistCard'
import { PSYCHOLOGIST_MOCK } from '../mocks/psychologist.mock'

describe('<PsychologistCard />',  () => {
    it('should render name', async () => {
      const { getByText} = render(<PsychologistCard data={PSYCHOLOGIST_MOCK} information={true} />)

      expect(getByText('Camila Oliveira')).toBeInTheDocument();
    })

    it('should render specialization', async () => {
      const { getByText} = render(<PsychologistCard data={PSYCHOLOGIST_MOCK} information={true} />)

      expect(getByText('Psicologia do comportamento')).toBeInTheDocument();
    })

    it('should render description', async () => {
      const { getByText} = render(<PsychologistCard data={PSYCHOLOGIST_MOCK} information={true} />)

      expect(getByText('Especialista em psicologia educacional, contribuindo para o desenvolvimento emocional de crianças e adolescentes.')).toBeInTheDocument();
    })

    it('should render not description', async () => {
      const { getByText, queryByText} = render(<PsychologistCard data={PSYCHOLOGIST_MOCK} information={false} />)

      expect(queryByText('Especialista em psicologia educacional, contribuindo para o desenvolvimento emocional de crianças e adolescentes.')).not.toBeInTheDocument();
    })
})