import { setupTest, get } from '@nuxt/test-utils'

describe('bulma module', () => {
  setupTest({
    testDir: __dirname,
    fixture: 'fixture',
    server: true
  })

  it('renders the index page', async () => {
    const { body } = await get('/')
    console.log('body =>', body)
    expect(body).toContain('Works !')
  })
})