import { members } from '../models/members' // Import the members array
import type { Member } from '../models/members'

// Function to get a member by their first name
export function getMemberByName(firstName: string): Promise<Member | undefined> {
  if (!firstName) {
    return Promise.reject(new Error('First name is required'))
  }
  const member = members.find((member) => member.firstName.toLowerCase() === firstName.toLowerCase())
  return Promise.resolve(member)
}

// Function to get a member by their member ID
export function getMemberByMemberId(memberId: number): Promise<Member | undefined> {
  if (!memberId) {
    return Promise.reject(new Error('Member ID is required'))
  }
  const member = members.find((member) => member.memberId === memberId)
  return Promise.resolve(member)
}

// Function to get all members
export function getAllMembers(): Promise<Member[]> {
  return Promise.resolve(members)
}