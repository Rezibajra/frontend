export function toggleView(t) {
    console.log('clicked', t);
    return {
      type: 'CLICKED',
      payload: !t
    };
  }