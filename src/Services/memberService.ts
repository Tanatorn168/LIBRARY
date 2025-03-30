import type { Member } from "../models/members"
import * as repo from "../repository/membersRepository"

export function getMemberByName(firstName: string): Promise<Member | undefined> {
    return repo.getMemberByName(firstName);
}

export function getMembereByMemberId(memberId: number): Promise<Member | undefined> {
    return repo.getMembereByMemberId(memberId);
}