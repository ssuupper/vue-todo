export default { // 相当于vue中的computed，为了方便生成应用中可以直接用的数据
  fullName (state) {
    return `${state.firstName} ${state.lastName}`
  }
}
