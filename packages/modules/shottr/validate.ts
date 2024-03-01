import { buildResponse, destr, modifyResponse } from '@as/shared'

/**
 * @url https://shottr.cc/licensing/verify.php
 * @url https://shottr-verify-license.blimps.workers.dev
 */
export function shottrVerifyLicense() {
  const body = {
    ...destr($response.body),
    tier: '1',
    explanation: undefined,
  }
  modifyResponse({
    body,
  })
}
