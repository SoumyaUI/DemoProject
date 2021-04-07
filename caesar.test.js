import caesar from './caesar';

describe('caesar cipher', () => {
    it('shifts Plaintext to Ciphertext', () => {
        expect(caesar('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', -3)).toBe('QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD')
      })
  
    it('shifts the A-Z characters by the correct amount', () => {
      expect(caesar('abc', 1)).toBe('bcd')
      expect(caesar('test', 2)).toBe('vguv')
    })
  
    it('should not affect numeric characters', () => {
      expect(caesar('abc123', 1)).toBe('bcd123')
    })
  
    it('testing lower and upper case', () => {
      expect(caesar('aBc', 1)).toBe('bCd')
    })
  
    it('xyz offshit of the alphabet', () => {
      expect(caesar('xyz', 2)).toBe('zab')
    })
  
    it('shift values greater than 26', () => {
      expect(caesar('abc', 26)).toBe('abc')
      expect(caesar('abc', 28)).toBe('cde')
    })

  })