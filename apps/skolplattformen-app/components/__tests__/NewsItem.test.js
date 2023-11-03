import { useApi, useNewsDetails } from '../../libs/hooks/src'
import React from 'react'
import { render } from '../../utils/testHelpers'
import { NewsItem } from '../newsItem.component'

jest.mock('../../libs/hooks/src')

const defaultNewsItem = {
  author: 'Köket',
  fullImageUrl: 'test.png',
  header: 'K-bullar!',
  published: '2021-02-15T09:13:28.484Z',
  modified: '2021-02-15T09:13:28.484Z',
}

let navigation

const setup = (customProps = { newsItem: {} }) => {
  useApi.mockReturnValue({ api: { getSessionCookie: jest.fn() } })

  useNewsDetails.mockReturnValue({
    data: {
      body: 'Nu blir det köttbullar',
    },
  })

  navigation = {
    goBack: jest.fn(),
  }

  const newsItem = {
    ...defaultNewsItem,
    ...customProps.newsItem,
  }

  const props = {
    navigation,
    route: {
      params: {
        child: { id: 1 },
        newsItem,
      },
    },
    ...customProps,
  }

  return render(<NewsItem {...props} />)
}

test.skip('gets article details using useNewsDetails', async () => {
  setup()

  expect(useNewsDetails).toHaveBeenCalledWith({ id: 1 }, defaultNewsItem)
})

test.skip('renders an article', () => {
  const screen = setup()

  expect(screen.getByText(/nu blir det köttbullar/i)).toBeTruthy()
  expect(screen.getByText('Publicerad: 15 feb 2021 10:13')).toBeTruthy()
  expect(screen.getByText('Uppdaterad: 15 feb 2021 10:13')).toBeTruthy()
})

test.skip('renders an article without published date if date is invalid', () => {
  const newsItemWithoutPublishedDate = {
    ...defaultNewsItem,
    published: '2020-08-16T21:10:00.000+02:0',
  }
  const screen = setup({ newsItem: newsItemWithoutPublishedDate })

  expect(screen.getByText(/nu blir det köttbullar/i)).toBeTruthy()
  expect(screen.getByText('Uppdaterad: 15 feb 2021 10:13')).toBeTruthy()
  expect(screen.queryByText('Publicerad: Invalid DateTime')).toBeFalsy()
})

test.skip('renders an article without modified date if date is invalid', () => {
  const newsItemWithoutPublishedDate = {
    ...defaultNewsItem,
    modified: null,
  }
  const screen = setup({ newsItem: newsItemWithoutPublishedDate })

  expect(screen.getByText(/nu blir det köttbullar/i)).toBeTruthy()
  expect(screen.getByText('Publicerad: 15 feb 2021 10:13')).toBeTruthy()
  expect(screen.queryByText('Uppdaterad: Invalid DateTime')).toBeFalsy()
})
